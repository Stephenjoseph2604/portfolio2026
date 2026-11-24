import emailjs from "@emailjs/browser";

/*  EmailJS — sends the contact form straight to your inbox.
    IDs come from Vite environment variables (see .env.example):
      VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    Only the *public* key is used here — it is designed to live in the browser. */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const isEmailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

if (!isEmailConfigured && import.meta.env.DEV) {
  console.warn("[contact] EmailJS is not configured — set the VITE_EMAILJS_* variables in .env and restart the dev server.");
}

/* After a successful send, the same browser has to wait this long before sending again.
   (Counted from successful sends only, so a failed attempt can be retried immediately.) */
const COOLDOWN_MS = 30_000;
const COOLDOWN_KEY = "contact:lastSentAt";

function readLastSent() {
  try {
    return Number(localStorage.getItem(COOLDOWN_KEY)) || 0;
  } catch {
    return 0;
  }
}
function markSent() {
  try {
    localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
  } catch {
    /* storage unavailable — skip the cooldown */
  }
}

/* Failure reasons the form can show a specific message for */
export const SEND_ERROR = {
  NOT_CONFIGURED: "not-configured",
  RATE_LIMITED: "rate-limited",
  FAILED: "failed",
};

/**
 * Send one contact-form message.
 * Template variables match the EmailJS template exactly: name, email, title, message.
 * Resolves only when EmailJS confirms delivery (HTTP 200); otherwise throws
 * an Error whose `reason` is one of SEND_ERROR.
 */
export async function sendContactEmail({ name, email, title, message }) {
  if (!isEmailConfigured) {
    throw Object.assign(new Error("EmailJS is not configured"), { reason: SEND_ERROR.NOT_CONFIGURED });
  }

  if (Date.now() - readLastSent() < COOLDOWN_MS) {
    throw Object.assign(new Error("Please wait before sending again"), { reason: SEND_ERROR.RATE_LIMITED });
  }

  let response;
  try {
    response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { name, email, title, message },
      {
        publicKey: PUBLIC_KEY,
        blockHeadless: true, // drop requests from headless (bot) browsers
      }
    );
  } catch (err) {
    const reason = err?.status === 429 ? SEND_ERROR.RATE_LIMITED : SEND_ERROR.FAILED;
    throw Object.assign(new Error(err?.text || "EmailJS request failed"), { reason, status: err?.status });
  }

  if (response?.status !== 200) {
    throw Object.assign(new Error(response?.text || "EmailJS did not confirm delivery"), {
      reason: SEND_ERROR.FAILED,
      status: response?.status,
    });
  }
  markSent();
  return response;
}
