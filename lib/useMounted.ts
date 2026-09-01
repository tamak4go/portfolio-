"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * True once the component has hydrated on the client, false during SSR and
 * the first client render — avoids the hydration-mismatch flash for values
 * (like resolved theme) that aren't known until after mount, without the
 * setState-in-effect pattern the react-hooks lint now flags.
 */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
