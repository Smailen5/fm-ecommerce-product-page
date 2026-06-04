# AGENTS.md — E-commerce Product Page

## Stack

| Categoria | Tecnologia |
|---|---|
| Frontend | React 18 + TypeScript 5.6 |
| Bundler | Vite 6 |
| Stili | Tailwind CSS v4 + CVA + tailwind-merge |
| Animazioni | Framer Motion 12 |
| Routing | React Router v7 (`useRoutes`) |
| Stato | React Context (`CartContext` + `CartProvider`) |
| Package manager | pnpm 9.14.4 |

## Comandi

| Comando | Cosa fa |
|---|---|
| `pnpm dev` | Dev server Vite |
| `pnpm build` | `tsc -b && vite build` |
| `pnpm lint` | ESLint (solo `ts,tsx`) |
| `pnpm preview` | Anteprima build |
| `pnpm docs` | Genera JSDoc in `docs/` |

Prettier è installato ma senza script npm → usa `npx prettier --check .` o `npx prettier --write .`.

## Architettura

- **Entrypoint**: `src/main.tsx` → `src/App.tsx`
- **Atomic Design**: `atoms/`, `molecules/`, `organism/`, `template/`, `pages/`
- **Stato carrello**: `lib/actions/cartActions.ts` (logica pura) → `lib/context/CartProvider.tsx` → `lib/hooks/useCart.ts`
- **Rotte**: 7 percorsi in `src/routes/routes.tsx`; 6 puntano a `<Product />`, `/docs` è lazy-loaded con `<Suspense>`
- **Alias**: `@/` → `src/` (es. `import { Button } from "@/components/atoms/Button"`)
- **SVG**: `import Icon from "@/assets/images/icon.svg?react"`; colore via `className="[&>path]:fill-current"`
- **Varianti componenti**: CVA in `src/variants/buttonVariants.ts`
- **Code splitting**: chunk `vendor-react` separato per React + ReactDOM + React Router
- **Colori/Tipi**: variabili CSS in `src/index.css` con `@theme`, interfacce in `src/types/index.ts`

## CI/CD

- `release-please.yml`: trigger su push a `main`, crea Release PR e GitHub Release
- `opencode.yml`: risponde a commenti `/oc` o `/opencode` su issue/PR

## Note

- `docs/` è output JSDoc, ignorato da git. Rigenera con `pnpm docs`.
- Font Kumbh Sans via Google Fonts in `src/index.css`
- Nessun test runner/configurazione test presente
- Nessuna versione di Node pinata (no `.nvmrc`)
