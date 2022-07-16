import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
export default function init() {
  Sentry.init({
    dsn: "https://0f0f6d98f1d6476a9ef697cd92584696@o1321297.ingest.sentry.io/6577961",
    integrations: [new BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
  });
}
