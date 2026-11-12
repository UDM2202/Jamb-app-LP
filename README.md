# ASGT landing page

The public site for ASGT (Advanced Systems Global Technology).

A single static page built with Vite. There is no framework and no runtime
dependency: the page is hand written HTML and CSS with about 5 kB of
JavaScript. Fonts are self hosted, so the site makes no third party requests.

## Run it

```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Where things are

| Path | Purpose |
| --- | --- |
| `index.html` | All page content and copy |
| `src/styles.css` | Design tokens, layout and components (light and dark) |
| `src/beam.js` | The interactive beam figure in the hero |
| `src/main.js` | Navigation, enquiry form, font loading |
| `src/site.config.js` | The enquiry email address |
| `public/asgt-mark.png` | Logo mark, also used as the favicon |
| `public/work/` | Product screenshots in WebP at two widths |
| `vercel.json` | Security headers and asset caching |

## The hero figure

The diagram in the hero is not an animation. It solves a two span continuous
beam under a moving point load using the three moment equation, then draws
the exact bending moment and shear force diagrams. The slider and the pointer
both move the load, and the slider keeps the figure usable from a keyboard.
Visitors who prefer reduced motion get a static figure.

## Things to change before launch

1. **Enquiry address.** `src/site.config.js` currently points at the PrepJ
   support inbox. Replace it with the ASGT business address.
2. **Domain.** Once the domain is known, add a canonical URL and absolute
   Open Graph image URL in `index.html`.

## Deployment

The repository deploys to Vercel as is (framework preset: Vite). `vercel.json`
sets a strict content security policy, HSTS and related headers. The policy
allows only same origin scripts, styles, fonts and images, so any third party
embed added later must be allowed there explicitly.

On any other static host, serve `dist/` and reproduce the headers from
`vercel.json`.
