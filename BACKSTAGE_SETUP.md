# Backstage setup

Admin dashboard buat manage event, route `/backstage`. Belum ada authentication — tambahin sebelum dipakai publik.

## 1. Turso (database)

```
turso auth login
turso db create cikicow
turso db show cikicow --url          # -> TURSO_DATABASE_URL
turso db tokens create cikicow       # -> TURSO_AUTH_TOKEN
```

Migrate data event lama (`src/data/events.json`) ke Turso:

```
TURSO_DATABASE_URL=... TURSO_AUTH_TOKEN=... npm run seed:events
```

## 2. Vercel (app + API)

Deploy project ini ke Vercel (frontend Vite + `/api` serverless functions otomatis kedetect).

Env vars di Vercel project settings:

- `TURSO_DATABASE_URL`
- `TURSO_AUTH_TOKEN`
- `BLOB_READ_WRITE_TOKEN` — auto-generated pas connect Vercel Blob store ke project (lihat step 3), gak perlu isi manual.

## 3. Vercel Blob (image storage)

1. Vercel dashboard → project → tab **Storage** → **Create Database** → pilih **Blob**.
2. Connect ke project ini. Vercel otomatis inject `BLOB_READ_WRITE_TOKEN` ke env vars (production + preview + dev).
3. Buat dev lokal (`vercel dev`), jalanin `vercel env pull` biar `BLOB_READ_WRITE_TOKEN` kebawa ke `.env` lokal.

## 4. Domain

- Root domain (`domainkamu.com`) → point ke Vercel (nameserver Vercel, atau A/CNAME record sesuai instruksi Vercel).

## Local dev

`npm run dev` cuma jalanin frontend (Vite). Buat test `/api/*` lokal, pakai Vercel CLI:

```
npm i -g vercel
vercel dev
```

Isi `.env` lokal (gitignored) dengan `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN`, `BLOB_READ_WRITE_TOKEN` biar `vercel dev` bisa baca.
