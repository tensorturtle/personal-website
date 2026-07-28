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