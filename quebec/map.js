const mapViewport = document.getElementById("map-viewport");
const mapLayer = document.getElementById("map-layer");
const pinLayer = document.getElementById("pin-layer");
const mapFilters = document.getElementById("map-filters");
const mapList = document.getElementById("map-list");
const mapPanelTitle = document.getElementById("map-panel-title");
const mapPanelBody = document.getElementById("map-panel-body");
const mapPanelTags = document.getElementById("map-panel-tags");
const mapPanelLinks = document.getElementById("map-panel-links");
const mapControls = document.getElementById("map-controls");

if (mapViewport && mapLayer && pinLayer && mapFilters) {
  const mapWidth = QC_DATA.map.width;
  const mapHeight = QC_DATA.map.height;
  mapLayer.style.width = `${mapWidth}px`;
  mapLayer.style.height = `${mapHeight}px`;

  const categories = [
    { id: "sight", label: "Sights" },
    { id: "activity", label: "Activities" },
    { id: "food", label: "Food" },
    { id: "dessert", label: "Sweets" },
    { id: "hotel", label: "Hotel" },
    { id: "transit", label: "Transit" }
  ];

  const state = {
    scale: 1,
    minScale: 0.8,
    maxScale: 3.2,
    translateX: 0,
    translateY: 0,
    activeCategories: new Set(categories.map((cat) => cat.id)),
    activeId: null
  };

  const formatTag = (tag) => tag.replace(/\b\w/g, (match) => match.toUpperCase());

  const updateFilterButtons = () => {
    mapFilters.querySelectorAll("button").forEach((btn) => {
      const cat = btn.dataset.category;
      btn.classList.toggle("is-active", state.activeCategories.has(cat));
    });
  };

  const renderFilters = () => {
    mapFilters.innerHTML = "";
    categories.forEach((cat) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip";
      button.dataset.category = cat.id;
      button.textContent = cat.label;
      button.addEventListener("click", () => {
        if (state.activeCategories.has(cat.id)) {
          state.activeCategories.delete(cat.id);
        } else {
          state.activeCategories.add(cat.id);
        }
        if (state.activeCategories.size === 0) {
          state.activeCategories.add(cat.id);
        }
        updateFilterButtons();
        renderPins();
      });
      mapFilters.appendChild(button);
    });
    updateFilterButtons();
  };

  const clampTranslate = () => {
    const viewportRect = mapViewport.getBoundingClientRect();
    const scaledWidth = mapWidth * state.scale;
    const scaledHeight = mapHeight * state.scale;
    const minX = Math.min(0, viewportRect.width - scaledWidth);
    const minY = Math.min(0, viewportRect.height - scaledHeight);
    state.translateX = Math.min(0, Math.max(minX, state.translateX));
    state.translateY = Math.min(0, Math.max(minY, state.translateY));
  };

  const applyTransform = () => {
    clampTranslate();
    mapLayer.style.transform = `translate(${state.translateX}px, ${state.translateY}px) scale(${state.scale})`;
    pinLayer.style.setProperty("--pin-scale", (1 / state.scale).toFixed(3));
  };

  const screenToMap = (x, y) => ({
    x: (x - state.translateX) / state.scale,
    y: (y - state.translateY) / state.scale
  });

  const centerOnMapPoint = (x, y, nextScale = state.scale) => {
    const viewportRect = mapViewport.getBoundingClientRect();
    const centerX = viewportRect.width / 2;
    const centerY = viewportRect.height / 2;
    state.scale = Math.min(state.maxScale, Math.max(state.minScale, nextScale));
    state.translateX = centerX - x * state.scale;
    state.translateY = centerY - y * state.scale;
    applyTransform();
  };

  const zoomAt = (delta, centerX, centerY) => {
    const before = screenToMap(centerX, centerY);
    state.scale = Math.min(state.maxScale, Math.max(state.minScale, state.scale * delta));
    state.translateX = centerX - before.x * state.scale;
    state.translateY = centerY - before.y * state.scale;
    applyTransform();
    renderPins();
  };

  const resetView = () => {
    state.scale = 1;
    const viewportRect = mapViewport.getBoundingClientRect();
    state.translateX = (viewportRect.width - mapWidth) / 2;
    state.translateY = (viewportRect.height - mapHeight) / 2;
    applyTransform();
    renderPins();
  };

  const focusItem = (item) => {
    if (!item) {
      return;
    }
    state.activeId = item.id;
    mapPanelTitle.textContent = item.name;
    mapPanelBody.textContent = item.details ? `${item.summary} ${item.details}` : item.summary;
    mapPanelTags.innerHTML = "";
    item.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = formatTag(tag);
      mapPanelTags.appendChild(span);
    });
    mapPanelLinks.innerHTML = "";
    if (item.maps) {
      const mapsLink = document.createElement("a");
      mapsLink.href = item.maps;
      mapsLink.textContent = "Google Maps";
      mapsLink.target = "_blank";
      mapsLink.rel = "noopener";
      mapsLink.dataset.external = "true";
      mapsLink.dataset.maps = "true";
      mapPanelLinks.appendChild(mapsLink);
      if (window.decorateMapsLink) {
        window.decorateMapsLink(mapsLink);
      }
    }
    const internalLink = document.createElement("a");
    if (item.category === "food" || item.category === "dessert") {
      internalLink.href = `eat.html?focus=${item.id}`;
      internalLink.textContent = "See on Eat page";
      mapPanelLinks.appendChild(internalLink);
    } else if (item.category === "activity" || item.category === "sight") {
      internalLink.href = `explore.html?focus=${item.id}`;
      internalLink.textContent = "See on Explore page";
      mapPanelLinks.appendChild(internalLink);
    } else if (item.category === "hotel") {
      internalLink.href = "travel.html#lodging";
      internalLink.textContent = "See lodging details";
      mapPanelLinks.appendChild(internalLink);
    } else if (item.category === "transit") {
      internalLink.href = "travel.html#travel-itinerary";
      internalLink.textContent = "See travel details";
      mapPanelLinks.appendChild(internalLink);
    }
    if (item.links && item.links.length) {
      item.links.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.label;
        anchor.target = "_blank";
        anchor.rel = "noopener";
        anchor.dataset.external = "true";
        mapPanelLinks.appendChild(anchor);
      });
    }
    renderPins();
  };

  const buildClusters = (items) => {
    const radiusPx = state.scale < 1.2 ? 70 : state.scale < 1.8 ? 55 : 35;
    const radius = radiusPx / state.scale;
    const buckets = new Map();

    items.forEach((item) => {
      const key = `${Math.floor(item.x / radius)}:${Math.floor(item.y / radius)}`;
      if (!buckets.has(key)) {
        buckets.set(key, []);
      }
      buckets.get(key).push(item);
    });

    const clusters = [];
    buckets.forEach((bucket) => {
      if (bucket.length === 1) {
        clusters.push({
          type: "pin",
          item: bucket[0]
        });
        return;
      }
      const avgX = bucket.reduce((sum, entry) => sum + entry.x, 0) / bucket.length;
      const avgY = bucket.reduce((sum, entry) => sum + entry.y, 0) / bucket.length;
      clusters.push({
        type: "cluster",
        x: avgX,
        y: avgY,
        count: bucket.length,
        items: bucket
      });
    });

    return clusters;
  };

  const renderList = (items) => {
    if (!mapList) {
      return;
    }
    mapList.innerHTML = "";
    items.slice(0, 18).forEach((item) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = item.name;
      button.addEventListener("click", () => {
        centerOnMapPoint(item.x, item.y, Math.max(state.scale, 2));
        focusItem(item);
      });
      li.appendChild(button);
      mapList.appendChild(li);
    });
    if (items.length > 18) {
      const more = document.createElement("li");
      more.className = "muted";
      more.textContent = `+ ${items.length - 18} more places`;
      mapList.appendChild(more);
    }
  };

  const renderPins = () => {
    const visibleItems = QC_DATA.items.filter((item) => state.activeCategories.has(item.category));
    const clusters = buildClusters(visibleItems);
    pinLayer.innerHTML = "";

    clusters.forEach((cluster) => {
      if (cluster.type === "pin") {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "pin";
        if (cluster.item.id === state.activeId) {
          button.classList.add("is-active");
        }
        button.style.left = `${cluster.item.x}px`;
        button.style.top = `${cluster.item.y}px`;
        button.textContent = cluster.item.name;
        button.addEventListener("click", () => {
          focusItem(cluster.item);
        });
        pinLayer.appendChild(button);
      } else {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "cluster";
        button.style.left = `${cluster.x}px`;
        button.style.top = `${cluster.y}px`;
        button.textContent = cluster.count;
        button.addEventListener("click", () => {
          centerOnMapPoint(cluster.x, cluster.y, Math.min(state.maxScale, state.scale * 1.4));
          mapPanelTitle.textContent = `Cluster of ${cluster.count}`;
          mapPanelBody.textContent = "Zoom in to reveal individual places.";
          mapPanelTags.innerHTML = "";
          mapPanelLinks.innerHTML = "";
        });
        pinLayer.appendChild(button);
      }
    });

    renderList(visibleItems);
  };

  const onWheel = (event) => {
    event.preventDefault();
    const rect = mapViewport.getBoundingClientRect();
    const centerX = event.clientX - rect.left;
    const centerY = event.clientY - rect.top;
    const delta = event.deltaY < 0 ? 1.1 : 0.9;
    zoomAt(delta, centerX, centerY);
  };

  const pointers = new Map();
  let lastDistance = 0;

  const onPointerDown = (event) => {
    mapViewport.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  };

  const onPointerMove = (event) => {
    if (!pointers.has(event.pointerId)) {
      return;
    }
    const prev = pointers.get(event.pointerId);
    const next = { x: event.clientX, y: event.clientY };
    pointers.set(event.pointerId, next);

    if (pointers.size === 1) {
      state.translateX += next.x - prev.x;
      state.translateY += next.y - prev.y;
      applyTransform();
      return;
    }

    if (pointers.size === 2) {
      const points = Array.from(pointers.values());
      const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
      if (lastDistance) {
        const rect = mapViewport.getBoundingClientRect();
        const centerX = (points[0].x + points[1].x) / 2 - rect.left;
        const centerY = (points[0].y + points[1].y) / 2 - rect.top;
        const delta = distance / lastDistance;
        zoomAt(delta, centerX, centerY);
      }
      lastDistance = distance;
    }
  };

  const onPointerUp = (event) => {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) {
      lastDistance = 0;
    }
  };

  if (mapControls) {
    mapControls.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-zoom]");
      if (!button) {
        return;
      }
      const action = button.dataset.zoom;
      if (action === "in") {
        zoomAt(1.2, mapViewport.clientWidth / 2, mapViewport.clientHeight / 2);
      }
      if (action === "out") {
        zoomAt(0.85, mapViewport.clientWidth / 2, mapViewport.clientHeight / 2);
      }
      if (action === "reset") {
        resetView();
      }
    });
  }

  mapViewport.addEventListener("wheel", onWheel, { passive: false });
  mapViewport.addEventListener("pointerdown", onPointerDown);
  mapViewport.addEventListener("pointermove", onPointerMove);
  mapViewport.addEventListener("pointerup", onPointerUp);
  mapViewport.addEventListener("pointercancel", onPointerUp);

  window.addEventListener("resize", () => {
    resetView();
  });

  renderFilters();
  resetView();

  const focusId = new URLSearchParams(window.location.search).get("focus");
  if (focusId) {
    const target = QC_DATA.items.find((item) => item.id === focusId);
    if (target) {
      state.activeCategories.add(target.category);
      updateFilterButtons();
      renderPins();
      centerOnMapPoint(target.x, target.y, 2.2);
      focusItem(target);
    }
  }
}
