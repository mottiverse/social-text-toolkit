# Social Text Toolkit

A collection of free online text tools for social media creators, built with Astro 5.x + Tailwind CSS v4.

## Features

- **6 core tools** — Fancy Text Generator, Symbol Library, Invisible Character, Kaomoji Collection, Text Dividers, Bio Preview
- **Platform compatibility tags** — shows which characters work on Twitter / Instagram / TikTok / etc.
- **Character limit hints** — real-time feedback on platform-specific limits
- **Multi-platform Bio preview** — see how your bio looks across platforms
- **Dark mode** — with system preference detection
- **Favorites** — save frequently used symbols and characters
- **One-click copy** — with toast notification feedback
- **Zero tracking** — no analytics, no ads, fully static

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | [Astro 5.x](https://astro.build) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/vite` |
| Deploy | Cloudflare Pages |
| Node | v22.15.0 (managed) |

## Project Structure

```
social-text-toolkit/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── scripts/          # Client-side JS (copy, favorites, theme)
├── src/
│   ├── components/        # Astro components (CopyButton, Header, Footer, etc.)
│   ├── data/              # Tool data (symbols, fonts, kaomoji, dividers, etc.)
│   ├── layouts/           # BaseLayout, ToolLayout
│   ├── pages/             #Astro pages → routes
│   ├── scripts/           # Bundled client scripts
│   └── styles/            # global.css (Tailwind v4 @theme config)
├── astro.config.mjs
├── package.json
└── README.md
```

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Live Demo

Coming soon.

## Tools Overview

| Tool | Route | Description |
|------|-------|-------------|
| Fancy Text Generator | `/fancy-text-generator` | 30+ font styles for social bios |
| Symbol Library | `/symbols` | 1000+ copyable symbols with platform tags |
| Invisible Character | `/invisible-character` | 13 invisible character types |
| Kaomoji Collection | `/kaomoji` | Japanese emoticons (˶˃ ᵕ ˂˶) |
| Text Dividers | `/text-dividers` | Decorative dividers for captions |
| Bio Preview Tool | `/bio-preview` | Multi-platform bio preview |

## Phase 2 (Planned)

- [ ] Small Text Generator
- [ ] Upside Down Text
- [ ] Glitch / Zalgo Text
- [ ] Username Generator

## License

MIT — feel free to fork and customize for your own toolkit.

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

Built by [@mottiverse](https://github.com/mottiverse)
