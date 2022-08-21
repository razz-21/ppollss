import type { LoadEvent } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load({ params }: LoadEvent) {
  const id = params.id; // document id from URL.
  return {
    id
  }
}