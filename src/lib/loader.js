import { LOADER } from "../content";

const SEEN_KEY = "sj:loader-seen";

/* Decide once, on first render, whether the launch loader should run */
export function shouldShowLoader() {
  if (!LOADER?.enabled) return false;
  if (!LOADER.oncePerSession) return true;
  try {
    return sessionStorage.getItem(SEEN_KEY) !== "1";
  } catch {
    return true;
  }
}

export function markLoaderSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* storage unavailable — the loader will simply show again next time */
  }
}
