# lswett.github.io

Personal development portfolio for Lance Swett — live at **https://lswett.github.io**

Hand-written static site: no build step, no frameworks. `index.html` + `styles.css` + `script.js`.
Design tokens and rationale in [DESIGN.md](DESIGN.md).

## Local preview

Open `index.html` in a browser, or:

```bash
python -m http.server 8000
# http://localhost:8000
```

## Editing content

All copy lives directly in `index.html`. Projects are card articles in the
`#projects` section — copy one to add another. Colors and type are CSS custom
properties at the top of `styles.css` (documented in DESIGN.md).
