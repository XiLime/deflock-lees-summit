# DeFlock Lee's Summit — Project Brief

Shared context for every Claude working on this project (claude.ai and Claude Code in VS Code).
**Read this first. Update the "Current status" section whenever you change something.**

## What this is

A public-records transparency site about the Lee's Summit, MO Police Department's Flock Safety ALPR (license plate reader) camera program. Organizer: Trace Kitzmann (contact@deflockls.com). Everything published is sourced from Missouri Sunshine Law (RSMo Ch. 610) requests and the City's own responses.

Tone: factual, sourced, measured. Describe what the City said or produced; attribute claims; no speculation presented as fact.

## Stack

- Astro static site, deployed on Cloudflare (`wrangler.jsonc`).
- Build: `npm run build`. Dev server: `astro dev --background` (manage with `astro dev stop|status|logs`).
- No CMS — content lives in code:

| What | Where |
|---|---|
| Sunshine Tracker request cards (status, summary, documents, timeline) | `src/pages/sunshine.astro` → `requests` array |
| Updates feed (also feeds RSS) | `src/data/updates.ts` → newest first |
| Records Request Fund (fees paid / pending) | `src/data/ledger.ts` → `expenses` |
| Long-form record write-ups ("Record 01…") | `src/pages/records.astro` |
| Published documents | `public/documents/…` |

## Publishing conventions

- **Documents** go in `public/documents/sunshine/` named `YYYY-MM-DD_short_description_PUBLIC.pdf` (date = date the City sent it). Audit exports go in `public/documents/flock-audit/`.
- **Before publishing any file**, remove Trace's home address, phone number and IP address (these appear in City web-form emails). City-redacted records are published as received.
- **Tracker statuses** (`statusClass`): `pending`, `partial` (PARTIALLY FULFILLED), `fulfilled` (RECORDS RECEIVED), `closed` (NO RESPONSIVE RECORDS / CONSOLIDATED).
- **Timeline entries**: `date: "OCT 9"` (uppercase month), short ALL-CAPS `title`, one or two plain sentences of `text`.
- **Every fee** the City quotes goes in `ledger.ts` as `pending`; flip to `paid` with the payment date once paid.
- **Every meaningful City response** gets an entry in `updates.ts`.

## Email → site workflow

City correspondence arrives at tracekitzmann@gmail.com (Gmail label: "Records requests 2026 - Deflock LS"). Key City contacts:

- Devyn Cox (City Clerk's office, Executive Assistant): funding, contract, grants, Council email requests
- Joshua Ward (LSPD Police Custodian of Records): PD records, audits, policies
- Sgt. Chris Depue (LSPD Public Information Unit): non-records questions

City tracking numbers ↔ tracker card ids:

| City # | Card id | Topic |
|---|---|---|
| 2026.275 | `2026-275` | Flock audit records (LSPD) |
| 2026.282/.283/.284 → consolidated (City thread "2026.347") | `AUG-29-2026-FUNDING`, `-ARPA`, `-FORFEITURE` | Funding, ARPA, forfeiture |
| 2026.237 (City thread) | part of `AUG-29-2026-FUNDING` | Grants portion |
| 2026.286 | `AUG-31-2026` | Chief's Council email + related comms |

## Current status (update this!)

_Last updated: 2026-10-27, by Claude on claude.ai (branch `october-records-update`)_

Open items awaiting action:
- **2026.275 audits:** $49.74 requested Oct 9 to finish the last 4 of 8 spreadsheets. Trace has asked for a written 610.023.4 statement on the redaction refusal.
- **Grants (2026.237):** revised quote ≤ $325, records available from Oct 21. Acceptance not yet confirmed in email.
- **2026.286 item #8:** $33.89 quote (Oct 20) for PD↔Communications Dept. emails. Items #2, #4, #5, #7 still outstanding.
- **Unclear:** City invoice CINV-3938 (Sep 11) — confirm which request it covers.

Documents received in October but **not yet added to `public/documents/`** (need to be saved from Gmail and scrubbed):
- Oct 7 (Devyn Cox): `2026.347 - Records Request - Trace Kitzmann.xlsx` (Flock payment records), `Ordinance 9728.pdf`
- Oct 8 (Devyn Cox): 5 ESAC reports (FY21-22 to FY2025), 4 GL290 forfeiture ledgers (FY22–25), 2 trial balances (FY26, FY27)
- Oct 9 (Joshua Ward): 6 audit PDFs (monthly ALPR audits Jul & Aug 2026, Jan–Jul 2026 audit, operations audit, audit-assistance report) and 4 spreadsheets (internal Axon activity, Jan–Feb Flock audit, Jul & Aug audit-assistance)
- Oct 9 (Devyn Cox): `Exhibit C CS Guide.pdf`

Story leads from the records (verify against the documents before publishing):
- Contract 2024-017: $175,000 annual recurring payment; payments Oct 31, 2024 and Nov 20, 2025.
- Supplier invoices SINV-29053 and SINV-29054 (Sep 4, 2026): "camera replacement," $800 each.
- No forfeiture expenditures FY2022–present.

## Astro docs

https://docs.astro.build — routing, components, content collections, styling.
