# Ricardo Tillemans's Portfolio

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |

## Project structure

```
src/
├── content/blog/     # MDX blog posts
├── data/
│   ├── resume.tsx    # Your personal data
│   └── config.ts     # Site settings & theme
├── components/       # UI components (no need to edit)
├── layouts/
│   └── Layout.astro  # HTML shell, reads from config.ts
├── pages/
│   ├── index.astro
│   └── blog/
└── styles/
    └── global.css    # Font imports & Tailwind base
public/               # Static assets (images, favicon)
```

## Credits

- [Starfolio](https://github.com/webrating/starfolio) - the Astro template used for this portfolio, built by Webrating.
- [Astro](https://astro.build), [shadcn/ui](https://ui.shadcn.com), [Tailwind CSS](https://tailwindcss.com)

## License

[MIT](LICENSE) - free for personal and commercial use.