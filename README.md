# Vox Sacra Duo Website

A polished Next.js App Router website for **Vox Sacra Duo** (Alvin Tan, baritone · Wayne Teo, piano), focused on sacred, classical, and inspirational programming.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm run start
```

## Replace Images

Place your final images in `public/images` using these filenames:

- `alvin-wayne-duo-hero.jpg`
- `alvin-recital-closeup.jpg`
- `alvin-sacred-chapel.jpg`
- `alvin-competition-stage.jpg`
- `alvin-portrait-blue.jpg`
- `alvin-orchestra-performance.jpg`
- `alvin-ensemble-performance.jpg`
- `wayne-piano-portrait.jpg`

The code includes comments near image usage indicating where replacements should happen.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project** and import the repository.
3. Keep default framework settings (Next.js).
4. Click **Deploy**.

Vercel will run `npm install` and `npm run build` automatically.
