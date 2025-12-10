import { createDirectus, rest, staticToken } from "@directus/sdk";

type Schema = {};

const directusUrl =
  process.env.NEXT_PUBLIC_DIRECTUS_URL || "http://localhost:8055";
const directusToken = process.env.DIRECTUS_STATIC_TOKEN || "";

export const directus = createDirectus<Schema>(directusUrl)
  .with(rest())
  .with(staticToken(directusToken));
