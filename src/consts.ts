import type { Site, Metadata} from "@types";

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

export const PORTFOLIO: Metadata = {
  TITLE: "Portfolio",
  DESCRIPTION: "Completed projects.",
};