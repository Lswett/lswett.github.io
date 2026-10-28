# DESIGN.md — lswett.github.io (Development Portfolio)

## Intent
Professional single-page developer portfolio for Lance Swett (junior/mid software
developer, job-hunting). Audience: recruiters and hiring managers. Goal: 30 seconds
to understand who he is, what he has shipped, and how to contact him.

## Direction
Editorial-technical. Dark, calm, typography-led — no glassmorphism, no gradient
soup, no generic AI-blue/purple. Warm brass accent references his print-industry
background. He is a BFA Graphic Design graduate: hierarchy and spacing do the work.

## Tokens

### Color
| Token        | Value     | Use                          |
|--------------|-----------|------------------------------|
| --bg         | #0B0D12   | page background              |
| --surface    | #12151D   | cards                        |
| --surface-2  | #181C26   | hover surface                |
| --border     | #232837   | hairlines, card borders      |
| --text       | #E9ECF2   | primary text                 |
| --muted      | #9AA3B2   | secondary text               |
| --accent     | #E8B15C   | links, highlights, eyebrows  |
| --accent-2   | #F2C179   | accent hover                 |

### Typography
- Display: "Space Grotesk" 600/700 (Google Fonts)
- Body: "Inter" 400/500/600
- Mono: "JetBrains Mono" 400/500 — eyebrows, nav, section labels, tags
- Scale: h1 clamp(2.6rem, 6vw, 4.2rem) / h2 clamp(1.6rem, 3vw, 2.2rem) / body 1rem/1.7

### Spacing & shape
- 4px base scale; section padding clamp(4.5rem, 9vw, 7.5rem) 0
- Max content width 1080px; card radius 12px; pills 999px

### Motion
- IntersectionObserver fade-up reveals, 0.55s ease-out, 60ms stagger
- Hover: translateY(-2px) + border brighten on cards
- prefers-reduced-motion: all reveals/transform animations disabled

## Pages / states
Single page (index.html) + 404.html. Breakpoints: 1280 / 768 / 375.
Nav collapses to a toggle menu under 768px. Sections: Hero, About, Projects,
Experience, Contact, Footer. Empty/loading/error states N/A (static, no JS data).

## Performance & accessibility
- No build step, no frameworks; two font families via one Google Fonts request
- Semantic landmarks, single h1, visible :focus-visible rings, aria-labels on icon links
- Budget: LCP < 2.5s on Fast 3G-class load (single HTML + one CSS + one small JS)
