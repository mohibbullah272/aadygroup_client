import { lazy } from "react";

export function lazyWithRetry<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  pathToPrefetch?: string,
  retries = 3
) {
  if (pathToPrefetch) {
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = pathToPrefetch;
    document.head.appendChild(link);
  }

  return lazy(async () => {
    let attempt = 0;

    while (attempt < retries) {
      try {
        return await factory();
      } catch (error) {
        attempt++;
        if (attempt >= retries) throw error;
        await new Promise((res) => setTimeout(res, 1000 * attempt));
      }
    }

    throw new Error("Max retries reached");
  });
}
