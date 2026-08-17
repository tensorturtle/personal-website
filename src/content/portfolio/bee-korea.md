---
company: "BEE Korea"
role: "Technical Volunteer"
dateStart: "01/01/2024"
dateEnd: "Present"
gifts:
  - llm-applications
  - self-hosting
  - technical-leadership

---

Volunteer work for the Korean arm of BEE (Biblical Education by Extension), which provides theological training by extension. Unpaid, and the most consequential engineering I have done.

BEE Korea's learning management system was built by an outside development team in 2019 and then sat nearly dormant for four and a half years. The money to build it had been budgeted; the money to keep it had not. The team dispersed, maintenance was never funded, and by the end the only way to get a fix was to ask the original developer as a personal favor. Nothing had been updated in years. The headquarters staff could log into the database and could not tell what they were allowed to touch.

I took it over in November 2025 on a single premise: **before adding any feature, make the system fixable.** It was running on Python 3.6 and Django 2.x, both long past security patches, full of infrastructure that had never once been used, with no document explaining how any of it worked.

So the first phase was not features. Modernize the versions, delete the dead code, put style and security checks in CI, and read the whole codebase to write down its structure — for people and for AI working under the same rules. In March 2026 I separated the tangled Django monolith into a backend that owns data and logic and a frontend that owns the screen, with Caddy between them so the browser never sees a token.

The part I care most about is the assumption underneath it: **whoever carries this next is not a developer.** So the environment could not be something a developer would set up on arrival. I put a development server inside the BEE headquarters, reachable remotely so anyone permitted can work in the identical environment from anywhere, with the data staying in one managed place. A push builds, tests, ships to a Seoul registry, and the production server updates itself — about four minutes, no hands.

Then the actual result, which was not mine. A missionary with no programming background, whom I had taught nothing beyond installing the environment, made 436 changes in a single month — more work than the system's first two and a half years combined. I had set it up and put off the training for two weeks; I came back to hundreds of commits. What he built on that foundation is the system BEE actually uses: the full seminar lifecycle with the 2019 grading formulas preserved intact, payment and refund handling with bank matching, a study-guide assistant that answers with cited pages, general assembly proxies and Saturday prayer attendance for roughly 309 people, a prayer feed that replaced a team leader collecting requests into a Word document and printing them, and a headquarters workbench for the daily manual admin.

Security is a standing cycle rather than a milestone: seven comprehensive audits so far, findings triaged Critical / Warning / Info. The framing that made this work came from the non-developer, not from me — developers tend to use AI to do their own work faster, while he used it to add people to the team, standing up an inspector for the code rather than a faster version of himself.

I also gave a day-long seminar to BEE members on how AI actually works — the harness and the "genius in a box" who can only pass notes under the door, then five honest ways it fails: trained never to give up, described in borrowed cognitive vocabulary, blind to anything outside the scroll, optimized for your words rather than your meaning, and errors that execute invisibly inside an agent instead of appearing on screen. The point was not enthusiasm. It was that knowing the shape of the tool tells you where to be careful.

![Teaching BEE members how LLMs and agent harnesses actually work](public/photos/bee/ai-seminar-2026.webp)

Both presentations are online, in Korean: the [AI seminar](/decks/bee-ai-seminar.html) and the [LMS development journey](/decks/bee-lms-journey.html) given to BEE Korea leadership.

Ahead: cutting the legacy system off entirely, continuing the audit cycle, and a unified platform so BEE worldwide shares one foundation — targeted for 2029.

This looks like the work of two people. It is closer to seven years of a community's ministry finally getting written down in code.
