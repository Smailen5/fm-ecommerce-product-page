# AGENTS.md — Progetto E-commerce Product Page

## Stack Tecnologico

| Categoria | Tecnologia |
|---|---|
| Frontend | React 18 + TypeScript 5.6 |
| Bundler | Vite 6 |
| Stili | Tailwind CSS v4 + CVA + tailwind-merge |
| Animazioni | Framer Motion 12 |
| Routing | React Router v7 (`useRoutes`) |
| Gestione Stato | React Context (`CartContext` + `CartProvider`) |
| Gestore pacchetti | pnpm 9.14.4 |
| Documentazione | JSDoc + clean-jsdoc-theme |
| CI/CD | Release Please + OpenCode AI |

## Comandi

| Comando | Descrizione |
|---|---|
| `pnpm dev` | Avvia dev server Vite con HMR |
| `pnpm build` | Type-check (`tsc -b`) + build produzione |
| `pnpm preview` | Anteprima locale build produzione |
| `pnpm lint` | ESLint su tutto il progetto |
| `pnpm format:check` | Verifica formattazione Prettier |
| `pnpm format:fix` | Applica formattazione Prettier |
| `pnpm type-check` | `tsc --noEmit` — solo controllo tipi |
| `pnpm docs` | Genera documentazione JSDoc in `docs/` |

## Struttura `src/` — Atomic Design

```
src/
├── main.tsx          # Entry point (StrictMode + BrowserRouter)
├── App.tsx           # Root (CartProvider + useRoutes)
├── index.css         # Tailwind v4 + variabili CSS
├── assets/images/    # Immagini e SVG (import via SVGR)
├── components/
│   ├── atoms/        # Button, Image, Ring
│   ├── molecules/    # Navbar, Cart, ProductQuantity, OverlayGallery, ...
│   ├── organism/     # GalleryDesktop, ProductGallery
│   ├── layout/       # Layout (Navbar + children)
│   ├── pages/        # Documentation (lazy-loaded)
│   └── template/     # ProductTemplate
├── data/             # Dati statici (prodotti, link, prezzi)
├── lib/
│   ├── actions/      # Funzioni pure (cartActions)
│   ├── context/      # CartContext + CartProvider
│   ├── hooks/        # useCart, useImageGallery
│   └── utils/        # Funzioni utility (price)
├── page/             # Product.tsx (pagina principale)
├── routes/           # routes.tsx (6 rotte → Product, /docs → lazy)
├── types/            # Interfacce TypeScript
└── variants/         # Varianti CVA (buttonVariants)
```

## Convenzioni di Codice

### TypeScript
- Strict mode attivo (`strict: true`)
- `noUnusedLocals` e `noUnusedParameters`: error
- Path alias `@/` mappa a `src/` (es. `import { Button } from "@/components/atoms/Button"`)
- Usa `interface` per tipi strutturati, definiti in `src/types/index.ts`

### Stili
- Tailwind v4 con `@theme` in `src/index.css` (variabili CSS nativamente)
- Varianti componenti con `class-variance-authority` (CVA) in `src/variants/`
- `tailwind-merge` per unire classi condizionali
- Plugin Prettier Tailwind ordina automaticamente le classi

### SVG
- Usa `vite-plugin-svgr`: `import IconCart from "@/assets/images/icon-cart.svg?react"`
- Per cambiare colore via CSS: `className="[&>path]:fill-current"`

### Routing
- React Router v7 con `useRoutes` in `src/routes/routes.tsx`
- `/docs` è lazy-loaded con `React.lazy()` + `Suspense`

### Performance
- Code splitting manuale: React chunk separato (`vendor-react`)
- Build rimuove `console.log`, `debugger` e commenti
- `dist/`, `docs/` e `node_modules/` ignorati da git

## Convenzioni Git

- **Conventional Commits** obbligatori: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`
- Messaggi di commit in **italiano**
- Branch naming: `<tipo>/<descrizione>` (es. `feat/aggiungi-carrello`)
- **Mai lavorare su `main`** direttamente
- **Mai `git add .`** — stage solo file specifici
- Commit atomici (una modifica logica per commit)

## Note

- `docs/` è generato da JSDoc e ignorato da git
- `src/docs/` non esiste più — l'output JSDoc va in `docs/` (root)
- Le variabili colore del progetto sono definite come variabili CSS in `src/index.css`
- Il font Kumbh Sans è importato da Google Fonts
- La documentazione dei componenti in `src/docs/` era una versione vecchia — usa `pnpm docs` per rigenerarla
