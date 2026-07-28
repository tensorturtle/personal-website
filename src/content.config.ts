import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * `gifts` on blog and portfolio entries is the theme classification: a list of
 * gift ids (filenames in src/content/gifts, without extension).
 *
 * The tag lives on the post rather than on the gift so there is one source of
 * truth. The /gifts page reads these in reverse to show what each gift has
 * actually produced, so tagging a post in one place populates both directions.
 * An id that matches no gift file is reported on /gifts in dev rather than
 * failing the build — a wrong tag should be visible, not fatal.
 */
const giftRefs = z.array(z.string()).optional();

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    gifts: giftRefs,
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    gifts: giftRefs,
  }),
});

/**
 * A catalog of what you have become skilled or knowledgeable at — a reference for
 * yourself and for anyone who needs a particular capability in a particular place.
 *
 * Two schema choices worth understanding, both from jesus-in-me-website/README.md:
 *
 * `evidence` exists so that a claim of skill points at something outside itself —
 * work done, writing published, a repo. This is the "truthfulness, no fluff" pillar
 * made structural: a gift with no evidence is an assertion, and the schema makes
 * that visible rather than letting it pass.
 *
 * `depth` is deliberately coarse and deliberately optional. Fine-grained
 * self-rating (7/10, "expert") invites inflation, which is the failure mode this
 * section is most exposed to. Omit it when you are unsure — an omission is honest
 * in a way that a guess is not.
 */
const gifts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/gifts" }),
  schema: z.object({
    name: z.string(),
    // One line, in the imperative and concrete: what you can actually be handed.
    // "Ship an on-device detection model" beats "computer vision expertise".
    summary: z.string().optional(),
    // Grouping label. Reuse existing values rather than inventing near-duplicates.
    domain: z.string(),
    // The specific things inside a broad skill — "CAN bus analysis" under Cars.
    // Useful where the umbrella name is too coarse to tell anyone what you can
    // actually be handed, and cheaper to write honestly than a prose summary.
    facets: z.array(z.string()).optional(),
    // Coarse on purpose. Omit rather than guess.
    //   familiar — can read it, follow it, and be useful with supervision
    //   working  — can be handed a task in it and deliver unsupervised
    //   deep     — can make judgment calls others rely on, and teach it
    depth: z.enum(["familiar", "working", "deep"]).optional(),
    // Where this was actually exercised. Prefer internal links to real entries.
    evidence: z.array(z.object({
      label: z.string(),
      href: z.string().optional(),
    })).optional(),
    // Set true for something you want to be asked for — the "in case it is needed
    // somewhere" half of the section's purpose, as opposed to a mere record.
    offered: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, portfolio, gifts };
