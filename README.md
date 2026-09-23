# Iltija Ali — Portfolio

Personal portfolio for Iltija Ali Murtaza Hussain, built with a **NestJS** API backend
and a **React + TypeScript + Tailwind** frontend.

## Structure
- `backend/` — NestJS API. Serves portfolio content (`GET /api/portfolio`) and handles
  the contact form (`POST /api/contact`, emails via SMTP/nodemailer).
- `frontend/` — Vite + React + TypeScript + Tailwind single-page site.

## Setup

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env   # then fill in SMTP_USER / SMTP_PASS (e.g. a Gmail App Password)
npm run start:dev      # runs on http://localhost:3001
```
The contact form will return a friendly error until real SMTP credentials are set in
`.env` — everything else works without it.

### 2. Frontend
```bash
cd frontend
npm install
npm run dev             # runs on http://localhost:5175
```
Vite proxies `/api` requests to the backend on port 3001, so run both at the same time.

### 3. Your photo
Save your profile photo as `frontend/public/profile-photo.jpg`. If it's missing, the
About section falls back to an initials avatar automatically.

## Editing content
All CV content (skills, experience, projects, education) lives in
`backend/src/portfolio/portfolio-data.ts` — edit it there and both the API and the
site update automatically.

## Build for production
```bash
cd backend && npm run build   # outputs to backend/dist
cd frontend && npm run build  # outputs to frontend/dist
```
