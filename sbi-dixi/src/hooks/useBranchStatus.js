import { useEffect, useState } from 'react';

const OPEN_MIN = 10 * 60; // 10:00
const CLOSE_MIN = 16 * 60; // 16:00

// Add 'YYYY-MM-DD' strings for public/state holidays
const HOLIDAYS = new Set([
  // '2026-11-08',
]);

const fmt = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Kolkata',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

function readIST(date = new Date()) {
  const p = Object.fromEntries(
    fmt.formatToParts(date).map(({ type, value }) => [type, value])
  );
  return {
    weekday: p.weekday, // Mon … Sun
    day: Number(p.day),
    dateKey: `${p.year}-${p.month}-${p.day}`,
    minutes: Number(p.hour) * 60 + Number(p.minute),
  };
}

export function isBranchOpen(date = new Date()) {
  const { weekday, day, dateKey, minutes } = readIST(date);
  if (weekday === 'Sun') return false;
  if (HOLIDAYS.has(dateKey)) return false;
  if (weekday === 'Sat') {
    const nth = Math.ceil(day / 7);
    if (nth === 2 || nth === 4) return false;
  }
  return minutes >= OPEN_MIN && minutes < CLOSE_MIN;
}

export function useBranchStatus() {
  const [open, setOpen] = useState(null); // null until mounted (SSR-safe)

  useEffect(() => {
    const update = () => setOpen(isBranchOpen());
    update();
    const id = setInterval(update, 30_000);
    document.addEventListener('visibilitychange', update);
    return () => {
      clearInterval(id);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return open; // null = unknown yet, true/false afterwards
}