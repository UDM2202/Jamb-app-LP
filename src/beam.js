// Two span continuous beam under a single moving point load.
//
// Both spans have length L and constant EI. With the load P at distance a
// from the outer support of the loaded span, the three moment equation gives
// the hogging moment over the middle support directly:
//
//   M_B = -P a (L^2 - a^2) / (4 L^2)
//
// Reactions follow from statics, and because the only loads are point forces
// the bending moment diagram is piecewise linear and the shear diagram is
// piecewise constant, so both are drawn exactly from a handful of ordinates.

const L = 6; // span, m
const P = 100; // load, kN

// Drawing geometry in SVG user units.
const X0 = 40;
const X1 = 520;
const PX_PER_M = (X1 - X0) / (2 * L);
const BMD_BASE = 204;
const BMD_SCALE = 0.34; // px per kNm
const SFD_BASE = 320;
const SFD_SCALE = 0.3; // px per kN

export function solve(x) {
  const mirrored = x > L;
  const a = mirrored ? 2 * L - x : x;

  const mB = (-P * a * (L * L - a * a)) / (4 * L * L);
  const rNear = (P * (L - a)) / L + mB / L; // outer support of the loaded span
  const rFar = mB / L; // outer support of the unloaded span (acts downward)
  const rB = P - rNear - rFar;

  const rA = mirrored ? rFar : rNear;
  const rC = mirrored ? rNear : rFar;

  return { rA, rB, rC, mB, mSpan: rNear * a };
}

const px = (m) => X0 + m * PX_PER_M;
const fmt = (v, d = 1) => (Math.abs(v) < 0.05 ? 0 : v).toFixed(d);

export function mountBeam() {
  const svg = document.getElementById('beam');
  const slider = document.getElementById('beam-pos');
  if (!svg || !slider) return;

  const $ = (id) => document.getElementById(id);
  const el = {
    arrow: $('beam-arrow'),
    label: $('beam-load-label'),
    bmd: $('beam-bmd'),
    sfd: $('beam-sfd'),
    mSpanText: $('beam-m-span'),
    mSupText: $('beam-m-sup'),
    out: $('beam-pos-out'),
    rA: $('r-a'),
    rB: $('r-b'),
    rC: $('r-c'),
    mSpan: $('m-span'),
    mB: $('m-b'),
  };

  function draw(x) {
    const s = solve(x);
    const xp = px(x);
    const xB = px(L);

    el.arrow.setAttribute('transform', `translate(${xp.toFixed(1)} 0)`);
    el.label.setAttribute('x', Math.min(Math.max(xp, 76), 484).toFixed(1));

    // Sagging is plotted below the baseline, on the tension face.
    const yM = (m) => (BMD_BASE + m * BMD_SCALE).toFixed(1);
    const underLoad = `L${xp.toFixed(1)} ${yM(s.mSpan)}`;
    const overSupport = `L${xB} ${yM(s.mB)}`;
    el.bmd.setAttribute(
      'd',
      `M${X0} ${BMD_BASE}${x <= L ? underLoad + overSupport : overSupport + underLoad}L${X1} ${BMD_BASE}Z`,
    );

    const yV = (v) => (SFD_BASE - v * SFD_SCALE).toFixed(1);
    const v1 = s.rA; // left of the first discontinuity
    const loadFirst = x <= L;
    const v2 = loadFirst ? v1 - P : v1 + s.rB;
    const v3 = -s.rC;
    const xMid = loadFirst ? xp : xB;
    const xLast = loadFirst ? xB : xp;
    el.sfd.setAttribute(
      'd',
      `M${X0} ${SFD_BASE}V${yV(v1)}H${xMid.toFixed(1)}V${yV(v2)}H${xLast.toFixed(1)}V${yV(v3)}H${X1}V${SFD_BASE}Z`,
    );

    el.mSpanText.setAttribute('x', Math.min(Math.max(xp, 64), 496).toFixed(1));
    el.mSpanText.setAttribute('y', (BMD_BASE + s.mSpan * BMD_SCALE + 14).toFixed(1));
    el.mSpanText.textContent = s.mSpan > 0.5 ? fmt(s.mSpan) : '';
    el.mSupText.setAttribute('x', xB);
    el.mSupText.setAttribute('y', (BMD_BASE + s.mB * BMD_SCALE - 6).toFixed(1));
    el.mSupText.textContent = s.mB < -0.5 ? fmt(s.mB) : '';

    el.out.textContent = `${x.toFixed(2)} m`;
    el.rA.textContent = `${fmt(s.rA)} kN`;
    el.rB.textContent = `${fmt(s.rB)} kN`;
    el.rC.textContent = `${fmt(s.rC)} kN`;
    el.mSpan.textContent = `${fmt(s.mSpan)} kNm`;
    el.mB.textContent = `${fmt(s.mB)} kNm`;
  }

  const set = (x) => {
    const clamped = Math.min(2 * L, Math.max(0, x));
    slider.value = clamped;
    draw(clamped);
  };

  // A slow sweep shows that the figure is live. It stops for good the moment
  // the visitor takes over, and never starts if they prefer reduced motion.
  let auto = !matchMedia('(prefers-reduced-motion: reduce)').matches;
  let visible = false;
  let frame = 0;
  const started = performance.now();

  const tick = (now) => {
    if (!auto || !visible) {
      frame = 0;
      return;
    }
    const t = (now - started) / 1000;
    set(L + (L - 0.9) * Math.sin(t * 0.32 - 0.6));
    frame = requestAnimationFrame(tick);
  };
  const takeOver = () => {
    auto = false;
  };

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && auto && !frame) frame = requestAnimationFrame(tick);
  }).observe(svg);

  slider.addEventListener('input', () => {
    takeOver();
    draw(Number(slider.value));
  });

  const fromPointer = (event) => {
    const box = svg.getBoundingClientRect();
    const userX = ((event.clientX - box.left) / box.width) * 560;
    takeOver();
    set((userX - X0) / PX_PER_M);
  };
  svg.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'mouse' || event.buttons) fromPointer(event);
  });
  svg.addEventListener('pointerdown', fromPointer);

  draw(Number(slider.value));
}
