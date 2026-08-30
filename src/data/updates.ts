export function slugifyUpdateTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const updates = [
  {
    date: "2026-08-29",
    title: "RSS feed, overdue-request tracking, structured data, and a filing guide",
    body: "Added an RSS feed so you can follow site updates without email, live stats and automatic overdue-flagging on the Sunshine Tracker (based on the City's own stated estimates), search-engine structured data, a step-by-step guide to filing your own Sunshine request, and share buttons on the FAQ and Record 06."
  },
  {
    date: "2026-08-29",
    title: "Three new Sunshine Law requests filed on funding sources",
    body: "Submitted requests covering the Flock program's budget and procurement records, whether ARPA/federal relief funds paid for any of it, and whether asset forfeiture proceeds were used — all now tracked on the Sunshine Tracker page."
  },
  {
    date: "2026-08-29",
    title: "Printable handout and press kit made easier to find",
    body: "Added a proper callout button for the printable meeting handout right on the Take Action page, and a direct press-kit link in the Contact page's sidebar next to the Media Inquiry option — both were previously reachable only through a small footer link."
  },
  {
    date: "2026-08-29",
    title: "Sitemap, 404 page, printable handout, FAQ, and press kit added",
    body: "Added a search-engine sitemap and robots.txt, a branded 404 page, a one-page printable summary for City Council meetings, an FAQ answering common pushback with sourced facts, and a press page with boilerplate and logo downloads for media coverage. Also added a skip-to-content link, visible keyboard focus states, and a consistent landmark on every page."
  },
  {
    date: "2026-08-29",
    title: "Take Action email button made more reliable",
    body: "The \"email everyone\" button only worked for visitors with a mail app configured. Added direct Gmail and Outlook.com compose links plus copy-to-clipboard buttons for the message and addresses, so it works regardless of what email setup someone has."
  },
  {
    date: "2026-08-25",
    title: "Fixed a Cloudflare deployment failure on the records page",
    body: "A site update briefly failed to deploy because of how the new shared-organizations search table loaded its data. Fixed the underlying build process — no impact to any published records."
  },
  {
    date: "2026-08-25",
    title: "Custom favicon, DeFlock.org link, and three new pages",
    body: "Swapped in a custom site icon, added a callout linking to the broader DeFlock.org movement on the homepage, and published new Take Action, Glossary, and Updates pages."
  },
  {
    date: "2026-08-25",
    title: "Record 06 published: inside Flock's own audit logs",
    body: "Added a new records entry built from a Sunshine Law request filed by fellow resident Daniel Hardin — Lee's Summit's own Flock search audit log, custom hotlists, shared-network list, and FlockOS admin settings. Includes a breakdown of nearly 2,700 camera searches, why searches are made, and how far outside Lee's Summit the data travels."
  },
  {
    date: "2026-08-24",
    title: "Records page reorganized",
    body: "Added a jump-navigation bar so it's easier to skip straight to a specific record, and trimmed duplicated write-ups between the contract section and the dedicated vehicle-fingerprint and data-retention sections."
  },
  {
    date: "2026-08-24",
    title: "Site-wide layout and contact form improvements",
    body: "Rebuilt the site on a shared page layout with a proper mobile navigation menu, added social-media preview cards (so links shared on Facebook/Twitter show a title, description, and image), and switched the contact form to submit without a page reload."
  },
  {
    date: "2026-08-24",
    title: "Sunshine request documents fixed and PDFs scrubbed",
    body: "Fixed the styling on the document-download buttons on the Sunshine Tracker page, and removed embedded hyperlinks from the published request PDFs that were unintentionally exposing personal contact information."
  },
  {
    date: "2026-08-24",
    title: "Sunshine Request Tracker launched",
    body: "Added a public tracker showing every Missouri Sunshine Law request filed as part of this project, its current status, and the documents received back from the City."
  },
  {
    date: "2026-08-17",
    title: "Records Archive published",
    body: "Published the first batch of records obtained from the City of Lee's Summit, covering the Flock Safety contract terms and how the ALPR program actually operates."
  },
  {
    date: "2026-08-17",
    title: "Contact form added",
    body: "Added a way for residents to reach out directly through the site."
  },
  {
    date: "2026-08-17",
    title: "Site launched",
    body: "DeFlock Lee's Summit goes live."
  }
];
