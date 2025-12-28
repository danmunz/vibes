const eatFilters = Array.from(document.querySelectorAll("#eat-filters [data-filter]"));
const breakfastGrid = document.getElementById("eat-breakfast");
const dinnerGrid = document.getElementById("eat-dinner");
const dessertGrid = document.getElementById("eat-dessert");
const eatStatus = document.getElementById("eat-status");

const eatItems = QC_DATA.items.filter((item) => ["food", "dessert"].includes(item.category));

const state = {
  filters: new Set(),
  focusId: new URLSearchParams(window.location.search).get("focus")
};

let focusHandled = false;

const formatTag = (tag) => tag.replace(/\b\w/g, (match) => match.toUpperCase());

const filteredItems = () => {
  if (state.filters.size === 0) {
    return eatItems;
  }
  return eatItems.filter((item) =>
    Array.from(state.filters).every((tag) => item.tags.includes(tag))
  );
};

const buildCard = (item) => {
  const card = document.createElement("article");
  card.className = "panel";
  card.dataset.id = item.id;
  const title = document.createElement("h3");
  title.textContent = item.name;

  const summary = document.createElement("p");
  summary.className = "muted";
  summary.textContent = item.summary;

  const details = document.createElement("p");
  details.className = "muted";
  details.textContent = item.details;

  const tags = document.createElement("div");
  tags.className = "card-tags";
  item.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = formatTag(tag);
    tags.appendChild(span);
  });

  card.appendChild(title);
  card.appendChild(summary);
  card.appendChild(details);
  card.appendChild(tags);

  const linkRow = document.createElement("div");
  linkRow.className = "cta-row";

  if (item.maps) {
    const mapsLink = document.createElement("a");
    mapsLink.href = item.maps;
    mapsLink.textContent = "Google Maps";
    mapsLink.target = "_blank";
    mapsLink.rel = "noopener";
    mapsLink.dataset.external = "true";
    mapsLink.dataset.maps = "true";
    linkRow.appendChild(mapsLink);
    if (window.decorateMapsLink) {
      window.decorateMapsLink(mapsLink);
    }
  }

  if (item.links && item.links.length) {
    const link = document.createElement("a");
    link.href = item.links[0].url;
    link.textContent = item.links[0].label;
    link.target = "_blank";
    link.rel = "noopener";
    link.dataset.external = "true";
    linkRow.appendChild(link);
  }

  const mapLink = document.createElement("a");
  mapLink.href = `map.html?focus=${item.id}`;
  mapLink.textContent = "View on Map";
  linkRow.appendChild(mapLink);
  card.appendChild(linkRow);

  return card;
};

const render = () => {
  const items = filteredItems();
  const breakfasts = items.filter((item) => item.meal === "breakfast");
  const dinners = items.filter((item) => item.meal === "dinner");
  const desserts = items.filter((item) => item.meal === "dessert");

  breakfastGrid.innerHTML = "";
  dinnerGrid.innerHTML = "";
  dessertGrid.innerHTML = "";

  breakfasts.forEach((item) => breakfastGrid.appendChild(buildCard(item)));
  dinners.forEach((item) => dinnerGrid.appendChild(buildCard(item)));
  desserts.forEach((item) => dessertGrid.appendChild(buildCard(item)));

  const active = state.filters.size ? Array.from(state.filters).join(", ") : "all";
  eatStatus.textContent = `${items.length} places · ${active}`;

  if (state.focusId && !focusHandled) {
    const card = document.querySelector(`[data-id="${state.focusId}"]`);
    if (card) {
      card.classList.add("is-focus");
      card.scrollIntoView({ block: "center" });
      focusHandled = true;
    } else {
      focusHandled = true;
    }
  }
};

const updateFilters = () => {
  eatFilters.forEach((btn) => {
    const tag = btn.dataset.filter;
    if (tag === "all") {
      btn.classList.toggle("is-active", state.filters.size === 0);
    } else {
      btn.classList.toggle("is-active", state.filters.has(tag));
    }
  });
};

const toggleFilter = (tag) => {
  if (tag === "all") {
    state.filters.clear();
  } else if (state.filters.has(tag)) {
    state.filters.delete(tag);
  } else {
    state.filters.add(tag);
  }
  updateFilters();
  render();
};

eatFilters.forEach((btn) => {
  btn.addEventListener("click", () => toggleFilter(btn.dataset.filter));
});

updateFilters();
render();
