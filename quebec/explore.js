const exploreGrid = document.getElementById("explore-grid");
const shortlistGrid = document.getElementById("shortlist-grid");
const exploreStatus = document.getElementById("explore-status");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));

const exploreItems = QC_DATA.items.filter((item) => ["activity", "sight"].includes(item.category));

const state = {
  filters: new Set(),
  favorites: new Set(JSON.parse(localStorage.getItem("qc-activity-favorites") || "[]")),
  focusId: new URLSearchParams(window.location.search).get("focus")
};

let focusHandled = false;

const saveFavorites = () => {
  localStorage.setItem("qc-activity-favorites", JSON.stringify(Array.from(state.favorites)));
};

const formatTag = (tag) => tag.replace(/\b\w/g, (match) => match.toUpperCase());

const filteredItems = () => {
  if (state.filters.size === 0) {
    return exploreItems;
  }
  return exploreItems.filter((item) =>
    Array.from(state.filters).every((tag) => item.tags.includes(tag))
  );
};

const renderShortlist = () => {
  shortlistGrid.innerHTML = "";
  if (state.favorites.size === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No favorites yet.";
    shortlistGrid.appendChild(empty);
    return;
  }

  Array.from(state.favorites).forEach((id) => {
    const item = exploreItems.find((entry) => entry.id === id);
    if (!item) {
      return;
    }
    const card = document.createElement("div");
    card.className = "shortlist-card";

    const title = document.createElement("h4");
    title.textContent = item.name;

    const detail = document.createElement("p");
    detail.className = "muted";
    detail.textContent = item.summary;

    const remove = document.createElement("button");
    remove.className = "button secondary";
    remove.textContent = "Remove";
    remove.setAttribute("data-remove", item.id);

    card.appendChild(title);
    card.appendChild(detail);
    card.appendChild(remove);
    shortlistGrid.appendChild(card);
  });
};

const buildExploreCard = (item) => {
  const card = document.createElement("article");
  card.className = "explore-card";
  card.dataset.id = item.id;

  const header = document.createElement("div");
  header.className = "card-header";

  const meta = document.createElement("div");
  const type = document.createElement("div");
  type.className = "card-type";
  type.textContent = item.category === "sight" ? "Sight" : "Experience";

  const title = document.createElement("h3");
  title.textContent = item.name;

  meta.appendChild(type);
  meta.appendChild(title);

  const favorite = document.createElement("button");
  favorite.className = "button secondary";
  favorite.setAttribute("data-favorite", item.id);
  const isFavorite = state.favorites.has(item.id);
  favorite.textContent = isFavorite ? "Saved" : "Save";
  favorite.setAttribute("aria-pressed", String(isFavorite));

  header.appendChild(meta);
  header.appendChild(favorite);

  const summary = document.createElement("p");
  summary.className = "muted";
  summary.textContent = item.summary;

  const tagWrap = document.createElement("div");
  tagWrap.className = "card-tags";
  item.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = formatTag(tag);
    tagWrap.appendChild(span);
  });

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "button";
  detailsBtn.textContent = "Details";
  detailsBtn.setAttribute("data-toggle", item.id);
  detailsBtn.setAttribute("aria-expanded", "false");

  actions.appendChild(detailsBtn);

  const details = document.createElement("div");
  details.className = "card-details";

  const detailText = document.createElement("p");
  detailText.className = "muted";
  detailText.textContent = item.details;
  details.appendChild(detailText);

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
    const linkWrap = document.createElement("p");
    item.links.forEach((link, index) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.label;
      anchor.target = "_blank";
      anchor.rel = "noopener";
      anchor.dataset.external = "true";
      linkWrap.appendChild(anchor);
      if (index < item.links.length - 1) {
        linkWrap.appendChild(document.createTextNode(" | "));
      }
    });
    details.appendChild(linkWrap);
  }

  const mapLink = document.createElement("a");
  mapLink.href = `map.html?focus=${item.id}`;
  mapLink.textContent = "View on Map";
  linkRow.appendChild(mapLink);
  details.appendChild(linkRow);

  card.appendChild(header);
  card.appendChild(summary);
  card.appendChild(tagWrap);
  card.appendChild(actions);
  card.appendChild(details);

  return card;
};

const renderExplore = () => {
  const items = filteredItems();
  exploreGrid.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No ideas match these filters.";
    exploreGrid.appendChild(empty);
  } else {
    items.forEach((item) => exploreGrid.appendChild(buildExploreCard(item)));
  }

  const activeFilters = state.filters.size ? Array.from(state.filters).join(", ") : "all";
  exploreStatus.textContent = `${items.length} idea${items.length === 1 ? "" : "s"} · ${activeFilters}`;

  if (state.focusId && !focusHandled) {
    const card = exploreGrid.querySelector(`[data-id="${state.focusId}"]`);
    if (card) {
      card.classList.add("is-focus", "is-open");
      const toggleBtn = card.querySelector("[data-toggle]");
      if (toggleBtn) {
        toggleBtn.setAttribute("aria-expanded", "true");
      }
      card.scrollIntoView({ block: "center" });
      focusHandled = true;
    } else {
      focusHandled = true;
    }
  }
};

const updateFilterButtons = () => {
  filterButtons.forEach((btn) => {
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
  updateFilterButtons();
  renderExplore();
};

const toggleFavorite = (id) => {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  saveFavorites();
  renderExplore();
  renderShortlist();
};

const toggleDetails = (id) => {
  const card = exploreGrid.querySelector(`[data-id="${id}"]`);
  if (!card) {
    return;
  }
  const isOpen = card.classList.toggle("is-open");
  const toggleBtn = card.querySelector("[data-toggle]");
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  }
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => toggleFilter(btn.dataset.filter));
});

exploreGrid.addEventListener("click", (event) => {
  const toggleBtn = event.target.closest("[data-toggle]");
  if (toggleBtn) {
    toggleDetails(toggleBtn.dataset.toggle);
    return;
  }

  const favoriteBtn = event.target.closest("[data-favorite]");
  if (favoriteBtn) {
    toggleFavorite(favoriteBtn.dataset.favorite);
  }
});

shortlistGrid.addEventListener("click", (event) => {
  const removeBtn = event.target.closest("[data-remove]");
  if (removeBtn) {
    toggleFavorite(removeBtn.dataset.remove);
  }
});

updateFilterButtons();
renderExplore();
renderShortlist();
