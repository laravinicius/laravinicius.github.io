# AGENTS.md

Static HTML/CSS personal portfolio (Vinicius Lara) deployed via GitHub Pages.

## Nonalgorithmic ground truth

- **No build system, package manager, tests, or lint.** No `npm`, no `package.json`. Edit `index.html` + `assets/css/style.css` directly and verify by opening in a browser.
- All user-facing content is **pt-BR** (Portuguese). Keep new copy in pt-BR.
- Lives at `https://laravinicius.github.io` (site-root subdomain, not `/repo/`).
- Assets live under `assets/` (`css/style.css`, `images/`). All paths in HTML are relative.
- Deploy is automatic: on push to `main`, GitHub Pages serves the repo root. No CI workflow file exists.
- This is the GitHub user profile repo; its purpose is the personal portfolio.

## Working on the portfolio

- `reestrutura.md` (root) is the **approved plan + ready-to-paste prompt** for restructuring the site from "student portfolio" to "TI analyst / full-stack dev". The current `index.html` does **not** yet reflect it. Before restructure work, read `reestrutura.md` and honor the map of sections, projects, and skills it defines.
- Many listed projects are internal to the employer (Microgate); do not invent public URLs or expose proprietary code—describe the problem solved and the stack instead.
- Don't invent projects, links, or descriptions not already supplied; use clear placeholders where info is missing (per `reestrutura.md`).
- Project links use `target="_blank"` and named anchors for external repos; follow the existing pattern.
- `.gitattributes`: `* text=auto` (LF normalization).