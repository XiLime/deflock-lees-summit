import rss from "@astrojs/rss";
import { updates, slugifyUpdateTitle } from "../data/updates";

export function GET(context) {
  return rss({
    title: "DeFlock Lee's Summit — Updates",
    description: "New records, features, and additions to the DeFlock Lee's Summit site.",
    site: context.site,
    items: updates.map((update) => ({
      title: update.title,
      description: update.body,
      pubDate: new Date(`${update.date}T12:00:00Z`),
      link: `/updates#${update.date}-${slugifyUpdateTitle(update.title)}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
