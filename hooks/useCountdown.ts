"use client";

import { useRef, useSyncExternalStore } from "react";

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const INITIAL_COUNTDOWN: Countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function getCountdown(targetIso: string): Countdown {
  const diffMs = Math.max(0, new Date(targetIso).getTime() - Date.now());
  const totalSeconds = Math.floor(diffMs / 1000);

  return {
    days: Math.floor(totalSeconds / 86_400),
    hours: Math.floor((totalSeconds % 86_400) / 3_600),
    minutes: Math.floor((totalSeconds % 3_600) / 60),
    seconds: totalSeconds % 60,
  };
}

function isSameCountdown(a: Countdown, b: Countdown): boolean {
  return a.days === b.days && a.hours === b.hours && a.minutes === b.minutes && a.seconds === b.seconds;
}

function subscribe(callback: () => void) {
  const intervalId = setInterval(callback, 1000);
  return () => clearInterval(intervalId);
}

export function useCountdown(targetIso: string): Countdown {
  const cacheRef = useRef<{ targetIso: string; value: Countdown } | null>(null);

  return useSyncExternalStore(
    subscribe,
    () => {
      const next = getCountdown(targetIso);
      const cache = cacheRef.current;

      if (!cache || cache.targetIso !== targetIso || !isSameCountdown(cache.value, next)) {
        cacheRef.current = { targetIso, value: next };
        return next;
      }

      return cache.value;
    },
    () => INITIAL_COUNTDOWN,
  );
}
