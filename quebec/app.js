const exploreItems = [
  {
    id: "old-quebec-walk",
    title: "Old Quebec Walking (Upper + Lower Town)",
    type: "Experience",
    summary: "Cobblestoned streets, fortified walls, and storybook architecture under fresh snow.",
    details: "Short loops from the hotel keep it easy and flexible. Combine with warm cafe breaks.",
    tags: ["snowy", "historic", "views", "family"],
    map: "old-quebec",
    links: [{ label: "Video tour", url: "https://www.youtube.com/watch?v=0o9ibwYiASc" }]
  },
  {
    id: "dufferin-terrace",
    title: "Terrasse Dufferin",
    type: "Scenic Walk",
    summary: "Boardwalk overlooks the St. Lawrence with winter lights and river views.",
    details: "Best near sunset or after dinner when the city glows.",
    tags: ["snowy", "views", "historic"],
    map: "riverfront",
    links: [{ label: "Official site", url: "https://www.quebec-cite.com/en/what-to-do-quebec-city/dufferin-terrace" }]
  },
  {
    id: "toboggan",
    title: "Toboggan Slide",
    type: "Thrill",
    summary: "A quick, fast sled ride beneath Chateau Frontenac.",
    details: "Fun for kids and adults. A short burst of winter joy.",
    tags: ["snowy", "family", "quick"],
    map: "riverfront",
    links: [{ label: "Tickets", url: "https://au1884.ca/toboggan-slide-tickets/" }]
  },
  {
    id: "funiculaire",
    title: "Funiculaire du Vieux-Quebec",
    type: "Transit + Views",
    summary: "A quick cable car between Upper and Lower Town.",
    details: "Good once as a novelty or to save legs after a long walk.",
    tags: ["quick", "views", "family"],
    map: "lower-town",
    links: [{ label: "Info", url: "https://www.quebec-cite.com/fr/entreprises/funiculaire-du-vieux-quebec" }]
  },
  {
    id: "civilization",
    title: "Musee de la civilisation",
    type: "Museum",
    summary: "Interactive exhibits on Quebec and Indigenous history.",
    details: "Modern, engaging, and not overwhelming. Perfect for a cold day.",
    tags: ["culture", "historic", "family", "cozy"],
    map: "lower-town",
    links: [{ label: "Museum", url: "https://mcq.org/" }]
  },
  {
    id: "plains",
    title: "Plains of Abraham",
    type: "Park",
    summary: "A broad urban park for peaceful winter walks.",
    details: "A change of pace from the old city streets and great for snowy photos.",
    tags: ["snowy", "views", "family"],
    map: "upper-town",
    links: [{ label: "Park site", url: "https://www.plainsofabraham.ca/" }]
  },
  {
    id: "skating",
    title: "Ice Skating at Place d'Youville",
    type: "Outdoor Activity",
    summary: "A festive outdoor rink beside the city walls.",
    details: "Rentals available. A classic winter scene at dusk.",
    tags: ["snowy", "family", "quick"],
    map: "upper-town",
    links: [{ label: "Skating info", url: "https://www.quebec-cite.com/en/businesses/patinoire-de-la-place-dyouville" }]
  },
  {
    id: "carriage",
    title: "Horse-Drawn Carriage Ride",
    type: "Scenic Ride",
    summary: "A slow, storybook ride through snowy streets.",
    details: "Low effort, high charm. Ideal for a cozy hour outdoors.",
    tags: ["historic", "cozy", "views"],
    map: "old-quebec",
    links: [{ label: "Caleches Quebec", url: "https://www.calechesquebec.com/en/" }]
  },
  {
    id: "frontenac-brunch",
    title: "Chateau Frontenac Brunch",
    type: "Meal + Experience",
    summary: "Elegant buffet brunch in an iconic setting.",
    details: "A celebratory meal with old-world grandeur.",
    tags: ["food", "cozy", "historic"],
    map: "old-quebec",
    links: [{ label: "Champlain", url: "https://www.chateau-frontenac.com/en/dine/champlain/" }]
  },
  {
    id: "au-petit-chalet",
    title: "Au Petit Chalet",
    type: "Breakfast",
    summary: "Casual diner with Quebec-style breakfast and poutine.",
    details: "Kid-friendly comfort food and generous portions.",
    tags: ["food", "cozy", "family"],
    map: "upper-town",
    links: [{ label: "Yelp", url: "https://www.yelp.com/biz/au-petit-chalet-qu%C3%A9bec" }]
  },
  {
    id: "apotek",
    title: "Cafe APOTEK",
    type: "Coffee + Pastries",
    summary: "Coffee and pastries for quick warmups.",
    details: "Perfect for a mid-morning pause.",
    tags: ["food", "cozy", "quick"],
    map: "old-quebec",
    links: [{ label: "Yelp", url: "https://m.yelp.com/biz/apotek-qu%C3%A9bec" }]
  },
  {
    id: "buffet-antiquaire",
    title: "Buffet de l'Antiquaire",
    type: "Breakfast",
    summary: "Classic local diner with hearty Quebec comfort food.",
    details: "No-nonsense, cozy, and filling.",
    tags: ["food", "cozy", "historic"],
    map: "lower-town",
    links: [{ label: "Yelp", url: "https://www.yelp.ca/biz/le-buffet-de-l-antiquaire-qu%C3%A9bec-2" }]
  },
  {
    id: "la-buche",
    title: "La Buche",
    type: "Breakfast + Brunch",
    summary: "Lively, traditional Quebecois comfort food with maple-forward dishes.",
    details: "Fun, informal, and full of local flavor.",
    tags: ["food", "cozy", "historic"],
    map: "old-quebec",
    links: [{ label: "Yelp", url: "https://www.yelp.com/biz/la-b%C3%BBche-qu%C3%A9bec-2" }]
  },
  {
    id: "cochon-dingue",
    title: "Le Cochon Dingue",
    type: "Brasserie",
    summary: "Reliable brasserie with a large menu and relaxed energy.",
    details: "Family friendly and easygoing.",
    tags: ["food", "family", "cozy"],
    map: "old-quebec",
    links: [{ label: "Yelp", url: "https://www.yelp.com/biz/cochon-dingue-qu%C3%A9bec-5" }]
  },
  {
    id: "petite-cabane",
    title: "La Petite Cabane a Sucre",
    type: "Breakfast",
    summary: "Sugar shack classics with maple-forward comfort food.",
    details: "Rustic, warm, and deeply Quebecois.",
    tags: ["food", "cozy", "culture"],
    map: "upper-town",
    links: [{ label: "Website", url: "https://www.petitecabane.com/" }]
  },
  {
    id: "anciens-canadiens",
    title: "Aux Anciens Canadiens",
    type: "Dinner",
    summary: "Historic, candlelit restaurant in a centuries-old building.",
    details: "Traditional dishes in an old-world atmosphere.",
    tags: ["food", "historic", "cozy"],
    map: "old-quebec",
    links: [{ label: "Yelp", url: "https://www.yelp.com/biz/aux-anciens-canadiens-qu%C3%A9bec" }]
  },
  {
    id: "bistro-1640",
    title: "Bistro 1640",
    type: "Dinner",
    summary: "Refined French-Quebecois cuisine in Place Royale.",
    details: "Cozy and slightly elevated with beautiful historic surroundings.",
    tags: ["food", "historic", "cozy"],
    map: "old-quebec",
    links: [{ label: "Yelp", url: "https://www.yelp.com/biz/bistro-1640-qu%C3%A9bec" }]
  },
  {
    id: "bistro-orygine",
    title: "Bistro L'Orygine",
    type: "Dinner",
    summary: "Modern bistro emphasizing seasonal ingredients.",
    details: "Special but accessible - a good celebratory dinner.",
    tags: ["food", "cozy"],
    map: "old-quebec",
    links: [{ label: "Yelp", url: "https://www.yelp.com/biz/l-orygine-qu%C3%A9bec" }]
  },
  {
    id: "bossini",
    title: "Bossini",
    type: "Dinner",
    summary: "Modern Italian trattoria with pizzas and pastas.",
    details: "Great for New Year's Eve without heavy formality.",
    tags: ["food", "family", "cozy"],
    map: "upper-town",
    links: [{ label: "Yelp", url: "https://www.yelp.com/biz/bossini-qu%C3%A9bec" }]
  },
  {
    id: "cabu",
    title: "Cabu Boire Et Manger",
    type: "Hotel Bistro",
    summary: "Relaxed, approachable bistro inside the Hilton.",
    details: "Perfect for an easy dinner without leaving the hotel.",
    tags: ["food", "cozy", "quick"],
    map: "hotel",
    links: [{ label: "Yelp", url: "https://www.yelp.com/biz/cabu-boire-et-manger-vieux-qu%C3%A9bec" }]
  },
  {
    id: "cafe-du-monde",
    title: "Cafe du Monde",
    type: "Lunch + Dinner",
    summary: "Bright dining with river views and flexible hours.",
    details: "Works well for breakfast or early dinner.",
    tags: ["food", "views", "cozy"],
    map: "riverfront",
    links: [{ label: "Yelp", url: "https://m.yelp.com/biz/cafe-du-monde-montr%C3%A9al-2" }]
  },
  {
    id: "hono",
    title: "Hono Izakaya + Ramen",
    type: "Dinner",
    summary: "Two Japanese dining experiences in one.",
    details: "Izakaya for small plates, ramen for rich, warming bowls.",
    tags: ["food", "cozy"],
    map: "upper-town",
    links: [
      { label: "Izakaya", url: "https://www.yelp.ca/biz/hon%C5%8D-izakaya-qu%C3%A9bec" },
      { label: "Ramen", url: "https://m.yelp.com/biz/hon%C5%8D-ramen-qu%C3%A9bec" }
    ]
  },
  {
    id: "poutineville",
    title: "Restaurant Poutineville",
    type: "Lunch",
    summary: "Build-your-own poutine with dozens of toppings.",
    details: "A comfort-food classic for a cold day.",
    tags: ["food", "cozy", "family"],
    map: "old-quebec",
    links: [{ label: "Yelp", url: "https://www.yelp.ca/biz/restaurant-poutineville-vieux-qu%C3%A9bec-qu%C3%A9bec-2" }]
  },
  {
    id: "erico",
    title: "Erico Chocolaterie",
    type: "Dessert",
    summary: "Chocolate shop and mini-museum.",
    details: "Ideal for a quick cocoa break and a sweet souvenir.",
    tags: ["sweet", "food", "cozy", "quick"],
    map: "upper-town",
    links: [{ label: "Yelp", url: "https://www.yelp.ca/biz/%C3%A9rico-qu%C3%A9bec-3" }]
  },
  {
    id: "maison-smith",
    title: "La Maison Smith",
    type: "Cafe",
    summary: "Local favorite for hot chocolate and pastries.",
    details: "Warm up between walks with excellent coffee.",
    tags: ["sweet", "food", "cozy", "quick"],
    map: "old-quebec",
    links: [{ label: "Yelp", url: "https://m.yelp.com/biz/la-maison-smith-quebec-6" }]
  },
  {
    id: "maple-taffy",
    title: "Maple Taffy on Snow",
    type: "Sweet Treat",
    summary: "Seasonal pop-ups with maple syrup rolled on snow.",
    details: "A classic Quebec winter experience.",
    tags: ["sweet", "food", "snowy", "quick"],
    map: "riverfront",
    links: []
  },
  {
    id: "paillard",
    title: "Paillard",
    type: "Bakery",
    summary: "European-style bakery with excellent pastries.",
    details: "Lively daytime stop with light lunch options.",
    tags: ["sweet", "food", "cozy"],
    map: "upper-town",
    links: [{ label: "Yelp", url: "https://www.yelp.ca/biz/paillard-qu%C3%A9bec-2" }]
  }
];

const mapData = {
  "old-quebec": {
    label: "Old Quebec",
    description: "Stone streets, Chateau Frontenac, and the heart of the historic district."
  },
  "upper-town": {
    label: "Upper Town",
    description: "City walls, Parliament area, Place d'Youville, and the Plains of Abraham."
  },
  "lower-town": {
    label: "Lower Town",
    description: "Portside streets, Place Royale, and the Musee de la civilisation."
  },
  "riverfront": {
    label: "Riverfront",
    description: "Terrasse Dufferin and sweeping views over the St. Lawrence River."
  },
  "hotel": {
    label: "Hilton Quebec City",
    description: "Warm basecamp near Porte Saint-Jean for quick resets and easy access."
  }
};

const state = {
  filters: new Set(),
  favorites: new Set(JSON.parse(localStorage.getItem("qc-favorites") || "[]")),
  mapFocus: null
};

const exploreGrid = document.getElementById("explore-grid");
const shortlistGrid = document.getElementById("shortlist-grid");
const exploreStatus = document.getElementById("explore-status");
const mapFocus = document.getElementById("map-focus");
const clearMap = document.getElementById("clear-map");
const toast = document.getElementById("toast");
const offlineBanner = document.getElementById("offline-banner");

const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const mapPins = Array.from(document.querySelectorAll(".map-pin"));

const formatTag = (tag) => tag.replace(/\b\w/g, (match) => match.toUpperCase());

const saveFavorites = () => {
  localStorage.setItem("qc-favorites", JSON.stringify(Array.from(state.favorites)));
};

const showToast = () => {
  toast.hidden = false;
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
};

const updateOnlineStatus = () => {
  const online = navigator.onLine;
  offlineBanner.hidden = online;
  document.body.classList.toggle("is-offline", !online);
};

const filteredItems = () => {
  if (state.filters.size === 0) {
    return exploreItems;
  }

  return exploreItems.filter((item) =>
    Array.from(state.filters).every((tag) => item.tags.includes(tag))
  );
};

const renderExplore = () => {
  const items = filteredItems();
  exploreGrid.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No ideas match these filters. Try another vibe.";
    exploreGrid.appendChild(empty);
  } else {
    items.forEach((item) => {
      exploreGrid.appendChild(buildExploreCard(item));
    });
  }

  const activeFilters = state.filters.size ? Array.from(state.filters).join(", ") : "all";
  exploreStatus.textContent = `${items.length} idea${items.length === 1 ? "" : "s"} · ${activeFilters}`;
};

const renderShortlist = () => {
  shortlistGrid.innerHTML = "";

  if (state.favorites.size === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No favorites yet. Save a card to build your shortlist.";
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
    title.textContent = item.title;

    const detail = document.createElement("p");
    detail.className = "muted";
    detail.textContent = item.summary;

    const remove = document.createElement("button");
    remove.className = "card-btn ghost";
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

  if (state.mapFocus && item.map === state.mapFocus) {
    card.classList.add("is-map-focus");
  }

  const cardTop = document.createElement("div");
  cardTop.className = "card-top";

  const meta = document.createElement("div");
  const type = document.createElement("div");
  type.className = "card-type";
  type.textContent = item.type;

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item.title;

  meta.appendChild(type);
  meta.appendChild(title);

  const favorite = document.createElement("button");
  favorite.className = "card-btn ghost";
  favorite.setAttribute("data-favorite", item.id);
  const isFavorite = state.favorites.has(item.id);
  favorite.textContent = isFavorite ? "Saved" : "Save";
  favorite.setAttribute("aria-pressed", String(isFavorite));

  cardTop.appendChild(meta);
  cardTop.appendChild(favorite);

  const summary = document.createElement("p");
  summary.className = "card-summary";
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
  detailsBtn.className = "card-btn";
  detailsBtn.textContent = "Details";
  detailsBtn.setAttribute("data-toggle", item.id);
  detailsBtn.setAttribute("aria-expanded", "false");

  actions.appendChild(detailsBtn);

  const details = document.createElement("div");
  details.className = "card-details";
  details.id = `details-${item.id}`;

  const detailsCopy = document.createElement("p");
  detailsCopy.textContent = item.details;
  details.appendChild(detailsCopy);

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

  card.appendChild(cardTop);
  card.appendChild(summary);
  card.appendChild(tagWrap);
  card.appendChild(actions);
  card.appendChild(details);

  return card;
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

const updateFilterButtons = () => {
  filterButtons.forEach((btn) => {
    const tag = btn.dataset.filter;
    if (tag === "all") {
      btn.classList.toggle("is-active", state.filters.size === 0);
      return;
    }
    btn.classList.toggle("is-active", state.filters.has(tag));
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

const setMapFocus = (pin) => {
  state.mapFocus = pin;
  const entry = mapData[pin];
  mapFocus.textContent = entry ? `${entry.label}: ${entry.description}` : "";

  mapPins.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.pin === pin);
  });

  renderExplore();
};

const clearMapFocus = () => {
  state.mapFocus = null;
  mapFocus.textContent = "Tap a pin to highlight matching ideas.";
  mapPins.forEach((btn) => btn.classList.remove("is-active"));
  renderExplore();
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleFilter(btn.dataset.filter);
  });
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

mapPins.forEach((btn) => {
  btn.addEventListener("click", () => {
    setMapFocus(btn.dataset.pin);
  });
});

clearMap.addEventListener("click", () => {
  clearMapFocus();
});

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-external=\"true\"]");
  if (!link) {
    return;
  }
  if (!navigator.onLine) {
    event.preventDefault();
    showToast();
  }
});

updateOnlineStatus();
renderExplore();
renderShortlist();
