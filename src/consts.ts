import type { Site, Metadata} from "@types";

export const SITE: Site = {
  NAME: "Jason Sohn",
  EMAIL: "tensorturtle@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_WORK_PROJECTS_ON_HOMEPAGE: 1,
  NUM_OSS_PROJECTS_ON_HOMEPAGE: 3,
};

// DEV NOTE: TITLEs use the vocabulary from jesus-in-me-website/AGENTS.md
// (Reflections / Contributions / Provenance). DESCRIPTIONs are your originals,
// left untouched — they are the meta descriptions search engines display, so
// they are worth rewriting in your own words. In particular:
//   HOME "Jason Sohn's personal website" is a placeholder, and is the single
//     highest-leverage sentence on the site for stating purpose over identity.
//   BLOG "Announcements, Lessons, and Direction." — "Direction" is already
//     pointing somewhere. Whose direction, and toward what?
//   PORTFOLIO "Completed projects." is ego-neutral but service-silent; the
//     stewardship model asks who each project was for.
export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Jason Sohn's personal website",
};

export const BLOG: Metadata = {
  TITLE: "Reflections",
  DESCRIPTION: "Announcements, Lessons, and Direction.",
};

export const PORTFOLIO: Metadata = {
  TITLE: "Contributions",
  DESCRIPTION: "Completed projects.",
};

// DEV NOTE: this DESCRIPTION is mine, not yours — the section is new, so there was
// no original to preserve. Rewrite it; it is the meta description for the page.
export const GIFTS: Metadata = {
  TITLE: "Gifts",
  DESCRIPTION: "What I have become skilled at, and where it has been put to use.",
};

// DEV NOTE: the section below is not built yet — no route, no collection, nothing
// imports it. It is here so the intention sits next to the vocabulary it changes.
//
// The move: stop telling the site as my life. Tell it as the story of Jesus, and let
// my life be where each aspect of him showed up. John 1:1–10:42 answers who he is;
// each answer landed in me at a particular time. So the chapters are aspects of
// Christ, and my years are the evidence that each one is true.
//
// The mapping, in the order I received them (not John's order):
//   Jesus is God          — accepting him as a child. First and simplest.
//   Jesus is Creator      — college; returning to him, and finding the made world
//                           worth studying.
//   Jesus is Savior       — the chapter after; holding on more tightly, because I
//                           needed to.
//   Jesus is Bread of Life— now. Independence, daily provision, kingdom work.
//
// If this ships, it changes the shape of the whole site, not just the nav:
//   - One page per aspect: the passage, what the aspect means, then the period of my
//     life where it became true. Aspect is the subject; my experience is the evidence.
//   - It links out to the Reflections / Contributions / Gifts already here rather than
//     restating them. That gives the existing content a spine it lacks — a portfolio
//     item is dated today, but it is not placed.
//   - Shape it like src/content/directions/: a src/content/testimony/ collection with
//     title, aspect, passage, order, period, and slug arrays for what it links to.
//   - Keep the list open. John goes past 10:42 — light of the world, good shepherd,
//     resurrection and the life, the way, the true vine — so more can land later
//     without a rewrite.
//   - Same tone guard as directions/TEMPLATE.md.example: present tense of what is
//     true, not future tense of promise.
//
// Two things to decide, and they are yours, not mine:
//   1. John's order, or the order I received them? Leaning mine, since this is
//      testimony rather than exposition — but then say so on the index, so the
//      departure reads as deliberate.
//   2. Where it sits. A fifth nav item is the small version. The large version is
//      making it the primary entry from HOME, on the logic that the other sections
//      are evidence and this is the claim. That reframes everything above it —
//      including the HOME DESCRIPTION placeholder still sitting unrewritten.
//
// export const TESTIMONY: Metadata = {
//   TITLE: "",           // "Testimony"? "Who He Is"? the second one is not about me
//   DESCRIPTION: "",     // yours to write — it is the meta description for the page
// };