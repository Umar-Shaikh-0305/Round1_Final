// ------------------------------------------------------------------
// Central settings. Everything the organizers may want to change lives here.
// There is no backend: accounts, schedule and progress are all local.
// ------------------------------------------------------------------

export const GAME_TITLE = 'CODE21';
export const GAME_SUBTITLE = 'THE MANSION';
export const COMPETITION_NAME = 'CODE21: THE MANSION';
export const ORGANIZATION = 'Umbrella Corporation';

// Length of each round, in minutes.
export const ROUND_DURATION_MIN = { 1: 60, 2: 60 };

// Round timer colours: yellow when this many seconds are left, red when fewer.
export const WARN_AT_SEC = 5 * 60;
export const DANGER_AT_SEC = 60;

// The 10-second per-question timer is built into the Code 21 game (Round 1).
export const QUESTION_SECONDS = 10;

// ---- Round start times -------------------------------------------
// Put real ISO date-times here when they are known, e.g. '2026-11-20T10:00:00+05:00'.
// While a value is null, a demo countdown is used instead (see DEMO_DELAY_SEC).
export const REAL_START_TIMES = { 1: null, 2: null };

// Demo countdowns (seconds after the page is first opened in this browser).
export const DEMO_DELAY_SEC = { 1: 20, 2: 150 };

// ---- Mock accounts (no backend) -----------------------------------
export const ACCOUNTS = [
  { username: 'team01', password: 'code21' },
  { username: 'team02', password: 'code21' },
  { username: 'team03', password: 'code21' },
  { username: 'admin', password: 'admin21' },
];

// Sample teams for the leaderboard (no backend yet). Replace with real data later.
export const MOCK_TEAMS = [
  { name: 'team04', r1: 29, r2: null },
  { name: 'team05', r1: 28, r2: null },
  { name: 'team06', r1: 26, r2: null },
  { name: 'team07', r1: 24, r2: null },
];

export const ROUNDS = {
  1: { label: 'ROUND 1', tagline: 'THE OUTBREAK BEGINS' },
  2: { label: 'ROUND 2', tagline: 'THE FINAL CHALLENGE' },
};

// Where the Round 1 game lives (served from /public/game).
export const ROUND1_GAME_URL = '/game/index.html';
