# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# recommsys

Repository for our **Recommendation System project** (UCL COMP 2025).  
It contains the frontend, backend, and shared code in one repository.

## Project Structure

recommsys/
│
├── web/ # React + Vite frontend (TypeScript + Axios)
├── worker/ # Express + TypeScript backend (feeds API)
├── shared/ # Shared TypeScript types and Zod schemas
├── package.json # Root workspaces + scripts
├── package-lock.json
└── README.md

## Worker

Backend service for recommsys.

## Setup

```bash
npm install
```

## Run the project
```bash
npm run dev
```
Frontend → http://localhost:5173
Backend → http://localhost:8787

Run only the frontend:
```bash
npm run dev:web
```
Run only the backend:
```bash
npm run dev:worker
```

## Build (for deployment)

Builds both frontend + backend:
```bash
npm run build
```

Lint (frontend only):
```bash
npm run lint
```

## Dependencies
### Backend (`worker/`)
- `express` → web server framework  
- `cors` → allow cross-origin requests (frontend ↔ backend)  
- `rss-parser` → fetch and parse RSS feeds  
- `zod` → schema validation  
- **Dev:** `typescript`, `ts-node`, `nodemon`, `@types/node`, `@types/express`

---

### Frontend (`web/`)
- `react`, `react-dom` → UI framework  
- `axios` → HTTP client for API requests  
- **Dev:** `vite`, `@vitejs/plugin-react`, `typescript`, `eslint`, `typescript-eslint`

---

### Root
- `concurrently` → run frontend + backend in parallel (`npm run dev`)

## API Contract

### `GET /health`
- **Description:** Health check endpoint  
- **Response:**
```json
{ "ok": true }
```
---

### GET /feeds
- **Description:** Returns a list of normalized feed items
- **Response (array of FeedItem):**
```typescript
{
  id: string,
  title: string,
  source: string,
  link: string,
  authors: string[],
  summary?: string,
  type: "paper" | "blog" | "repo",
  date: string, // ISO format
  tags: string[]
}
```

---

## Development Notes
- **CORS** → allows frontend to fetch from backend  
- **Nodemon** → restarts backend automatically when files change  
- **Axios** → used in frontend for API requests  
- **Shared schemas** → in `/shared`, keep frontend + backend in sync  

---

## Authors