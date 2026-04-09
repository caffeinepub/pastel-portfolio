# Design Brief: Pastel Portfolio

**Tone:** Soft, professional, memorable — gallery aesthetic meets designer's resume.

**Differentiation:** Pastel color blocking for card categories, smooth scroll hierarchy, profile photo as visual anchor with gentle depth treatment.

## Color Palette

| Token        | OKLCH           | Purpose                    |
|--------------|-----------------|----------------------------|
| Primary      | 0.65 0.14 280   | Lavender (nav, primary CTA)|
| Secondary    | 0.88 0.11 330   | Blush pink (accent cards)  |
| Accent       | 0.72 0.16 40    | Warm gold/yellow (hover)   |
| Muted        | 0.92 0.02 0     | Light grey (dividers)      |
| Background   | 0.98 0.01 0     | Off-white (main bg)        |
| Foreground   | 0.25 0.02 280   | Deep purple-grey (text)    |
| Chart1       | 0.75 0.13 295   | Pastel purple              |
| Chart2       | 0.72 0.16 40    | Pastel golden              |
| Chart3       | 0.68 0.15 185   | Pastel cyan                |

## Typography

| Layer   | Font          | Size   | Weight  | Use Case                  |
|---------|---------------|--------|---------|---------------------------|
| Display | Fraunces      | 3xl–4xl| 700–900| Hero name, section titles |
| Body    | General Sans  | sm–lg  | 400–600| Paragraph, card content   |
| Mono    | JetBrains     | xs–sm  | 400–500| Code, tech tags          |

## Elevation & Depth

| Zone            | Background    | Border         | Shadow    | Use                              |
|-----------------|---------------|----------------|-----------|----------------------------------|
| Header/Nav      | Card (99%)    | Border (94%)   | Soft      | Sticky nav, profile bar         |
| Hero Section    | Background    | None           | Elevated  | Photo frame (soft), name        |
| Content Cards   | Card (99%)    | Border (94%)   | Soft      | Certifications, projects        |
| Footer          | Muted (92%)   | Border (94%)   | None      | Contact, links                   |

## Component Patterns

- **Card:** `.card-pastel` — rounded-lg, shadow-md, hover lift + shadow-lg
- **Buttons:** `.button-soft` — 6px padding, rounded-lg, primary bg, hover shadow
- **Photo frame:** `.hero-photo` — rounded-full, border-4 primary/20, shadow-lg
- **Text gradient:** `.text-gradient-soft` — from-primary to-accent

## Motion & Transitions

| Action      | Timing  | Easing            | Distance |
|-------------|---------|-------------------|----------|
| Hover card  | 0.3s    | cubic-bezier(0.4) | -4px (Y) |
| Fade in     | 0.5s    | ease-out          | +4px → 0 |
| Float anim  | 3s loop | ease-in-out       | ±8px (Y) |

## Structural Zones

- **Sticky nav:** Header with logo/name, pinned top, light shadow divider
- **Hero:** Full-width photo container, name (Fraunces xl), title (General Sans lg), intro text
- **Sections:** About Me, Certifications (grid 2–3 col), Internships (2 col), Mini Projects (2 col), Contact
- **Cards:** Rounded corners (16px), 1px border, subtle shadow, pastel color accents per category

## Spacing & Rhythm

- Section padding: 4rem (top/bottom), 1.5rem (horizontal mobile)
- Card gaps: 1.5rem (grid), 1rem (internal content)
- Line-height: 1.7 (body), 1.3 (display)
- Letter-spacing: 0.5px (body), 0.75px (display)

## Responsive Breakpoints

- Mobile: 1-col (cards), full bleed
- Tablet (md): 2-col grids, 1rem padding
- Desktop (lg): 3-col certification grid, 2-col projects, 2rem padding

## Constraints

- Max width: 1200px container on desktop
- No decorative gradients on background
- Shadows only on interactive/elevated elements
- Chart colors limited to 5 hues for consistency
- Font weights: 400 (body), 600 (semibold), 700–900 (display)
