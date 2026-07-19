# Netflix Clone

A full-stack Netflix clone built with the modern Next.js stack. It features
email/password authentication plus GitHub and Google OAuth, a movie catalog,
user profiles, and a favoriting system.

## Tech Stack

| Layer        | Technology                                              |
| ------------ | ------------------------------------------------------- |
| Framework    | [Next.js 15](https://nextjs.org/) (Pages Router)        |
| UI           | React 19, Tailwind CSS 4                                |
| Language     | TypeScript 5                                            |
| Database     | MongoDB via [Prisma 6](https://www.prisma.io/)          |
| Auth         | NextAuth 4 (Credentials + GitHub + Google)              |
| Data fetching| SWR + Axios                                             |

## Features

- Email/password sign up & login (bcrypt-hashed passwords)
- Social login with GitHub and Google OAuth
- Profiles screen ("Who is watching?")
- Home page with a randomized Billboard hero and scrollable movie rows
- "My List" favorites — add/remove movies, persisted per user
- Movie watch page with inline video player

## Getting Started

### 1. Prerequisites

- Node.js 20+ (see `.nvmrc`)
- A MongoDB / MongoDB Atlas database
- (Optional) GitHub and Google OAuth app credentials

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable                | Description                                  |
| ----------------------- | -------------------------------------------- |
| `DATABASE_URL`          | MongoDB connection string                    |
| `NEXTAUTH_JWT_SECRET`   | JWT secret (`openssl rand -base64 32`)       |
| `NEXTAUTH_SECRET`       | Session secret (`openssl rand -base64 32`)   |
| `GITHUB_ID` / `GITHUB_SECRET`   | GitHub OAuth app credentials       |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth app credentials |

### 4. Generate the Prisma client & seed the database

```bash
npx prisma generate
npm run db:seed
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Production build                     |
| `npm run start`   | Start the production server          |
| `npm run lint`    | Lint with ESLint                     |
| `npm run type-check` | TypeScript type check             |
| `npm run db:seed` | Seed sample movies into the database |

## Project Structure

```
components/    Reusable UI (Navbar, Billboard, MovieList, MovieCard, ...)
hooks/         SWR data hooks (useCurrentUser, useMovieList, useFavorites)
lib/           Prisma client, auth helpers, SWR fetcher
pages/         Pages + Next.js API routes
prisma/        Prisma schema and seed script
public/        Static assets (images)
```

## Notes

This project uses the **Pages Router**. The original build predates the App
Router; it was modernized (dependency upgrades, TypeScript strictness, Tailwind
4, ESLint flat config) while keeping the Pages Router for minimal churn.
