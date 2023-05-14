import { error } from "@sveltejs/kit";

export async function load() {
  throw new error(401, "navigation to /error-throw");
}
