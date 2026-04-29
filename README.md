# Signal Caller — SparkQB

QB training gamification system with formation builder, quick reps, and drive mode.

## Setup

### 1. Supabase
1. Go to your Supabase project dashboard
2. Open the **SQL Editor**
3. Paste the contents of `schema.sql` and run it
4. Go to **Authentication → Settings** and ensure Email sign-in is enabled

### 2. Grant yourself Admin
After signing up through the app:
1. Go to Supabase SQL Editor
2. Run: `update public.players set is_admin = true where email = 'your@email.com';`

### 3. Deploy to Vercel
1. Push this folder to your GitHub repo
2. Connect the repo to Vercel
3. Deploy — no build step needed (pure HTML/JS)

## File Structure

```
/
├── index.html          — Login / sign up
├── locker-room.html    — Player dashboard
├── game.html           — Quick Reps + Drive Mode
├── builder.html        — Admin: Formation Builder
├── admin.html          — Admin: Dashboard + roster
├── schema.sql          — Supabase database schema
├── js/
│   └── supabase.js     — DB connection + auth helpers
├── css/
│   └── sparkqb.css     — SparkQB brand design system
└── assets/
    └── field.png       — Field canvas image
```

## Pages

| Page | Access | Description |
|------|--------|-------------|
| `index.html` | Public | Login / sign up |
| `locker-room.html` | Players | QB dashboard, stats, mode select |
| `game.html?mode=quickreps` | Players | 10-play coverage ID challenge |
| `game.html?mode=drive` | Players | Full drive mode with 3-tap progression |
| `builder.html` | Admin only | Formation builder with field canvas |
| `admin.html` | Admin only | Player roster, formation library, settings |

## Game Modes

### Quick Reps
- 10 plays per session
- Timed coverage identification
- Clock speeds up as overall rating climbs
- Film review on every answer
- Streak tracker

### Drive Mode
- 3-tap progression per play:
  1. **Tap 1** — ID the coverage (pre-snap)
  2. **Tap 2** — Select the concept
  3. **Tap 3** — Tap the correct receiver (routes revealed)
- Reaction time recorded on Tap 3
- Outcome animation + film review
- Drive objective: score before turnover on downs

## Formation Builder (Admin)

1. Select front → OL/DL auto-place
2. Select personnel → offensive line auto-place  
3. Click field → select position from toolbar → dot places
4. Double-click dot → set route, read order, blitz arrow, notes
5. Fill out formation metadata (coverage, difficulty, film notes)
6. Save → goes to Supabase formations table

## Difficulty Levels

| Level | Clock | Taps | Routes Shown |
|-------|-------|------|--------------|
| Beginner | 7s | Tap 1 only | Never |
| Intermediate | 5s | Tap 1 + 2 | Reveal only |
| Advanced | 3s | All 3 taps | At Tap 3 |
| Elite | 1.5s | All 3 taps | At Tap 3, disguised look |

## Tech Stack
- Pure HTML/CSS/JS — no framework
- Supabase for auth + database
- Hosted on Vercel
- SparkQB brand system (Anton + Roboto Mono + Inter)
