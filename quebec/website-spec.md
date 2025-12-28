# Quebec City Winter Itinerary Explorer - Specification

## Goals
- Create a visually rich, winter-in-Quebec experience that feels cozy, historic, and French-Canadian.
- Let the family explore ideas rather than follow a fixed schedule.
- Present all content locally so the site works by opening `index.html` with no server. The site can have multiple pages, just no server-side component.
- Degrade gracefully when offline and still be fully usable.
- Work well on iPhone and desktop.

## Audience
- A family planning and exploring a winter trip to Quebec City (Dec 29, 2025 - Jan 3, 2026).

## Content Requirements
- Quebec and Quebec City overview: orientation, history, fun facts.
- Weather expectations and winter context.
- Local map and geography with points of interest.
- Travel and lodging details.
- Things to do and places to eat.
- Packing guidance and a short "what not to do" list.
- Content sourced from `itinerary.md`.

## Information Architecture
1. Hero: trip title, dates, and a short winter immersion blurb.
2. Explore ideas: a tag-driven or filter-based explorer that mixes activities and food.
3. Quebec City orientation: neighborhood context, history, fun facts.
4. Map and geography: an offline-friendly map with pinned areas and key spots.
5. Weather and winter tips: temperature ranges, daylight, and quick tips.
6. Travel and lodging: inbound/outbound segments and hotel details.
7. Things to do: grouped by vibe (historic, snowy, family, views, culture).
8. Eat and drink: grouped by breakfast, lunch/dinner, desserts/warm breaks.
9. Packing essentials: condensed list for adults and kids.
10. Things not to do: short guidance list.

## Interaction Model
- Filters and tags for vibes (cozy, snowy, history, food, kid-friendly, views).
- Clickable cards that expand for details and links.
- Map pins that highlight related items in the explorer.
- Optional favorites list stored in localStorage.
- Smooth in-page navigation and section anchors.

## Visual Direction
- Winter atmosphere: cool blues, snow white, pine green, warm amber candlelight accents.
- Textures and shapes: soft gradients, paper grain, subtle snow drift shapes.
- Typography: expressive serif for headings and warm sans for body text.
- Motion: gentle snowfall effect, staggered reveals for cards.

## Offline Behavior
- Detect `navigator.onLine` and show an offline banner.
- Replace any external embeds with local fallbacks (static map graphic and text).
- Keep all critical content embedded in the page.
- External links remain visible but noted as requiring connection.

## Technical Approach
- Static site: `index.html`, `styles.css`, `app.js`, optional local assets.
- Vanilla HTML/CSS/JS only, no build step, no external dependencies.
- All content stored locally (inline or in local JS objects).
- Fully compatible with GitHub Pages.

## Deliverables
- `index.html` with semantic sections and interactive explorer.
- `styles.css` containing theme, layout, and responsive rules.
- `app.js` for filtering, interactions, and offline detection.
- Optional local map asset or SVG fallback.
