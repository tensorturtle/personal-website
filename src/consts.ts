import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jason Sohn",
  EMAIL: "tensorturtle@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_WORK_PROJECTS_ON_HOMEPAGE: 1,
  NUM_OSS_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Jason Sohn's personal website",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Announcements, Lessons, and Direction.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Previous and current work.",
};

export const WORK_PROJECTS: Metadata = {
  TITLE: "Work Projects",
  DESCRIPTION: "A collection of my work projects, with links to demos.",
};

export const OPEN_SOURCE_PROJECTS: Metadata = {
  TITLE: "Open Source Projects",
  DESCRIPTION: "A collection of my open source projects, with links to repos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/tensorturtle",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/tensorturtle"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jasonsohnsquared/",
  }
];
