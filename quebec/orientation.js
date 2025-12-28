const townPanel = document.getElementById("town-panel");
const townButtons = Array.from(document.querySelectorAll("#town-buttons button"));

const townContent = {
  upper: {
    title: "Upper Town",
    body: "Cliff-top streets, city walls, and the grandest views. This is where the Parliament, hotels, and ramparts live.",
    points: ["Best for views", "Historic fortifications", "Short walks from the hotel"]
  },
  lower: {
    title: "Lower Town",
    body: "By the river, the old port and Place Royale feel intimate and maritime. Streets are narrow and full of storybook facades.",
    points: ["Riverside charm", "Musee de la civilisation", "Cozy cafes"]
  },
  river: {
    title: "Riverfront",
    body: "The St. Lawrence shapes everything: wind, views, and history. It is the city backdrop and a main winter vista.",
    points: ["Terrasse Dufferin boardwalk", "Best sunset light", "Cold wind adds drama"]
  }
};

const setTown = (key) => {
  const content = townContent[key];
  if (!content || !townPanel) {
    return;
  }
  townPanel.innerHTML = `
    <h3>${content.title}</h3>
    <p class="muted">${content.body}</p>
    <ul>${content.points.map((point) => `<li>${point}</li>`).join("")}</ul>
  `;

  townButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.town === key);
  });
};

if (townButtons.length) {
  townButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setTown(button.dataset.town);
    });
  });
  setTown("upper");
}

const timelineButtons = document.getElementById("timeline-buttons");
const timelinePanel = document.getElementById("timeline-panel");

const timelineArt = {
  river: `<svg viewBox="0 0 240 180" aria-hidden="true">
    <rect width="240" height="180" fill="#f5f8fb"/>
    <circle cx="190" cy="40" r="14" fill="#d8b36a"/>
    <path d="M0,120 C50,110 80,130 120,120 C160,110 190,120 240,110 L240,180 L0,180 Z" fill="#7aa8bc"/>
    <path d="M40,110 Q70,100 100,110 T160,110 T220,100" fill="none" stroke="#6f93b1" stroke-width="4"/>
    <polygon points="70,90 120,70 150,90 120,104" fill="#b0723f"/>
    <rect x="108" y="64" width="8" height="14" fill="#7b4b2f"/>
  </svg>`,
  ship: `<svg viewBox="0 0 240 180" aria-hidden="true">
    <rect width="240" height="180" fill="#f5f8fb"/>
    <rect x="30" y="130" width="180" height="16" fill="#8b6b52"/>
    <path d="M40,130 L200,130 L170,156 L70,156 Z" fill="#7b5c46"/>
    <rect x="116" y="52" width="6" height="78" fill="#4b5a6a"/>
    <polygon points="122,58 174,128 122,128" fill="#c5d7e6"/>
    <polygon points="116,68 60,128 116,128" fill="#e6edf3"/>
    <circle cx="60" cy="44" r="8" fill="#d8b36a"/>
  </svg>`,
  fort: `<svg viewBox="0 0 240 180" aria-hidden="true">
    <rect width="240" height="180" fill="#f4f7fb"/>
    <rect x="30" y="88" width="180" height="60" fill="#b99a7d"/>
    <rect x="46" y="64" width="44" height="24" fill="#a3846a"/>
    <rect x="150" y="64" width="44" height="24" fill="#a3846a"/>
    <rect x="54" y="50" width="10" height="14" fill="#8e6f58"/>
    <rect x="70" y="50" width="10" height="14" fill="#8e6f58"/>
    <rect x="166" y="50" width="10" height="14" fill="#8e6f58"/>
    <rect x="182" y="50" width="10" height="14" fill="#8e6f58"/>
    <path d="M40,120 L200,120" stroke="#8b6b52" stroke-width="6"/>
    <circle cx="120" cy="110" r="10" fill="#7b5c46"/>
  </svg>`,
  quill: `<svg viewBox="0 0 240 180" aria-hidden="true">
    <rect width="240" height="180" fill="#f6f8fb"/>
    <rect x="30" y="90" width="180" height="50" rx="10" fill="#e7dccd"/>
    <circle cx="40" cy="114" r="12" fill="#d2c2ad"/>
    <circle cx="200" cy="114" r="12" fill="#d2c2ad"/>
    <path d="M80,60 C120,50 150,70 170,100" stroke="#4b5a6a" stroke-width="6" fill="none"/>
    <path d="M170,100 L190,120 L160,118 Z" fill="#4b5a6a"/>
    <circle cx="70" cy="60" r="6" fill="#d8b36a"/>
  </svg>`,
  castle: `<svg viewBox="0 0 240 180" aria-hidden="true">
    <rect width="240" height="180" fill="#f4f7fb"/>
    <rect x="60" y="80" width="120" height="70" fill="#b08f74"/>
    <rect x="80" y="60" width="30" height="90" fill="#9d7c63"/>
    <rect x="130" y="60" width="30" height="90" fill="#9d7c63"/>
    <polygon points="75,60 95,40 115,60" fill="#c7a689"/>
    <polygon points="125,60 145,40 165,60" fill="#c7a689"/>
    <rect x="108" y="100" width="24" height="50" fill="#7b5c46"/>
    <circle cx="200" cy="50" r="10" fill="#d8b36a"/>
  </svg>`,
  snow: `<svg viewBox="0 0 240 180" aria-hidden="true">
    <rect width="240" height="180" fill="#f2f6fb"/>
    <circle cx="80" cy="60" r="6" fill="#d8b36a"/>
    <circle cx="160" cy="40" r="5" fill="#c5d7e6"/>
    <path d="M120,50 L120,130" stroke="#6f93b1" stroke-width="6"/>
    <path d="M90,70 L150,110" stroke="#6f93b1" stroke-width="6"/>
    <path d="M150,70 L90,110" stroke="#6f93b1" stroke-width="6"/>
    <path d="M120,50 L100,30" stroke="#6f93b1" stroke-width="4"/>
    <path d="M120,50 L140,30" stroke="#6f93b1" stroke-width="4"/>
    <path d="M120,130 L100,150" stroke="#6f93b1" stroke-width="4"/>
    <path d="M120,130 L140,150" stroke="#6f93b1" stroke-width="4"/>
  </svg>`
};

const timeline = [
  {
    year: "Time immemorial",
    title: "Indigenous homelands",
    story: "Long before European arrival, the St. Lawrence corridor was home to Indigenous nations, including the Huron-Wendat and Innu, with deep river, trade, and winter knowledge.",
    then: "The river was a highway and gathering place through all seasons.",
    now: "Indigenous culture continues through language, art, and living communities nearby.",
    details: [
      "Look for: Indigenous history exhibits at the Musee de la civilisation.",
      "Notice: how the city still orients to the river."
    ],
    focus: "musee-civilisation",
    art: "river"
  },
  {
    year: "1535",
    title: "Cartier reaches Stadacona",
    story: "French expeditions map the St. Lawrence and encounter the village of Stadacona near today's Lower Town.",
    then: "The port and river access shape settlement choices.",
    now: "Lower Town retains the tight, maritime feel of an early riverside hub.",
    details: [
      "Walk: Place Royale and the Lower Town lanes.",
      "Best vibe: early morning for quiet cobblestones."
    ],
    focus: "old-quebec-walk",
    art: "ship"
  },
  {
    year: "1608",
    title: "Champlain founds Quebec",
    story: "Samuel de Champlain establishes Quebec as a strategic trading post on Cap Diamant.",
    then: "A riverside habitation anchors New France.",
    now: "Old Quebec's compact core still follows that original footprint.",
    details: [
      "Walk: Upper and Lower Town for the full historic loop.",
      "Landmark: Chateau Frontenac sits above the original site."
    ],
    focus: "old-quebec-walk",
    art: "ship"
  },
  {
    year: "1663",
    title: "New France becomes a royal colony",
    story: "The French Crown takes direct control, investing in defenses and governance.",
    then: "Walls, gates, and bastions expand to protect the city.",
    now: "Fortifications remain one of Quebec City's defining features.",
    details: [
      "Look for: city walls and gates on your walks.",
      "Best view: along the ramparts near Upper Town."
    ],
    focus: "old-quebec-walk",
    art: "fort"
  },
  {
    year: "1690",
    title: "Siege of Quebec",
    story: "An English fleet led by William Phips fails to capture the fortified city.",
    then: "Defenses prove their strength in a dramatic standoff.",
    now: "The ramparts you walk today are living evidence of that era.",
    details: [
      "Listen for: the echo of cannons in your imagination.",
      "Best walk: the wall-top views over the river."
    ],
    focus: "old-quebec-walk",
    art: "fort"
  },
  {
    year: "1759",
    title: "Battle of the Plains of Abraham",
    story: "A pivotal battle of the Seven Years' War shifts control of Quebec City.",
    then: "British forces win a decisive victory.",
    now: "The plains are a vast urban park for winter walks.",
    details: [
      "Walk: wide paths for quiet snow-covered views.",
      "Good reset: a calmer pace away from the old streets."
    ],
    focus: "plains-abraham",
    art: "fort"
  },
  {
    year: "1763",
    title: "Treaty of Paris",
    story: "France cedes New France to Britain, reshaping governance and trade.",
    then: "British rule begins while French culture endures.",
    now: "You can see both influences in architecture and street names.",
    details: [
      "Notice: French language and English signage side by side.",
      "Look for: mix of stone and British-era buildings."
    ],
    art: "quill"
  },
  {
    year: "1774",
    title: "Quebec Act",
    story: "British Parliament preserves French civil law and Catholic rights.",
    then: "Legal and cultural continuity is secured.",
    now: "French-Canadian culture remains a central identity.",
    details: [
      "Listen for: French as the everyday language in Old Quebec.",
      "Taste: French culinary influence across menus."
    ],
    art: "quill"
  },
  {
    year: "1867",
    title: "Confederation",
    story: "Quebec joins the new Canadian confederation as a province.",
    then: "Quebec City becomes the provincial capital.",
    now: "Government life and civic plazas shape Upper Town.",
    details: [
      "Nearby: Parliament Building and civic squares.",
      "Feel: a capital city with old-world scale."
    ],
    art: "quill"
  },
  {
    year: "1893",
    title: "Chateau Frontenac opens",
    story: "The grand railway hotel is built to crown the skyline and welcome travelers.",
    then: "Luxury travel meets fortress-like architecture.",
    now: "The Chateau remains the city's most iconic landmark.",
    details: [
      "Best photo: from Terrasse Dufferin.",
      "Look up: the steep copper roofs and towers."
    ],
    focus: "chateau-frontenac",
    art: "castle"
  },
  {
    year: "1955",
    title: "Winter Carnival returns",
    story: "The modern Carnaval de Quebec launches, embracing winter as celebration.",
    then: "Snow, ice, and music become a seasonal ritual.",
    now: "Skating rinks and festive streets keep the spirit alive.",
    details: [
      "Try: outdoor skating at Place d'Youville.",
      "Warm up: cocoa between snowy walks."
    ],
    focus: "place-dyouville",
    art: "snow"
  },
  {
    year: "1985",
    title: "UNESCO World Heritage Site",
    story: "Old Quebec is recognized for its preserved fortifications and historic fabric.",
    then: "Protection ensures the old city survives intact.",
    now: "Cobblestones, walls, and facades feel centuries old.",
    details: [
      "Walk: Upper and Lower Town for the full UNESCO core.",
      "Look for: plaques marking historic sites."
    ],
    focus: "old-quebec-walk",
    art: "fort"
  },
  {
    year: "2008",
    title: "400th anniversary",
    story: "Quebec City celebrates 400 years with citywide events and renewed spaces.",
    then: "Public plazas and promenades get fresh life.",
    now: "The city balances heritage with daily living.",
    details: [
      "Best stroll: riverfront and Terrasse Dufferin.",
      "Feel: a historic city that still evolves."
    ],
    focus: "terrasse-dufferin",
    art: "snow"
  },
  {
    year: "Today",
    title: "Living winter city",
    story: "Quebec City pairs deep history with cozy winter rituals.",
    then: "Short walks and warm cafes define winter travel.",
    now: "Food, views, and snow-lit streets create the modern vibe.",
    details: [
      "Plan: one highlight per day with warm breaks.",
      "Say yes: hot chocolate, slow walks, and river views."
    ],
    focus: "terrasse-dufferin",
    art: "snow"
  }
];

const setTimeline = (index) => {
  const entry = timeline[index];
  if (!entry || !timelinePanel) {
    return;
  }
  const detailsList = entry.details && entry.details.length
    ? `<ul>${entry.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>`
    : "";
  const mapLink = entry.focus
    ? `<div class="cta-row"><a href="map.html?focus=${entry.focus}">See on map</a></div>`
    : "";
  const art = timelineArt[entry.art] || timelineArt.snow;

  timelinePanel.innerHTML = `
    <div class="timeline-panel-inner">
      <div>
        <p class="eyebrow">${entry.year}</p>
        <h3>${entry.title}</h3>
        <p class="muted">${entry.story}</p>
        <div class="timeline-split">
          <div>
            <h4>Then</h4>
            <p class="muted">${entry.then}</p>
          </div>
          <div>
            <h4>Now</h4>
            <p class="muted">${entry.now}</p>
          </div>
        </div>
        ${detailsList}
        ${mapLink}
      </div>
      <div class="timeline-art">${art}</div>
    </div>
  `;
  timelineButtons.querySelectorAll("button").forEach((btn, btnIndex) => {
    btn.classList.toggle("is-active", btnIndex === index);
  });
};

if (timelineButtons && timelinePanel) {
  timeline.forEach((entry, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = entry.year;
    button.addEventListener("click", () => setTimeline(index));
    timelineButtons.appendChild(button);
  });
  setTimeline(0);
}

const triviaCard = document.getElementById("trivia-card");
const triviaPrev = document.getElementById("trivia-prev");
const triviaNext = document.getElementById("trivia-next");

const trivia = [
  "Quebec City is among the oldest European-founded cities in North America.",
  "Old Quebec is a UNESCO World Heritage Site.",
  "Quebec City is the only fortified city north of Mexico.",
  "The St. Lawrence River shapes the city's skyline and history.",
  "Upper Town sits on Cap Diamant, a rocky promontory above the river.",
  "Lower Town hugs the port and historic Place Royale.",
  "Samuel de Champlain founded the city as a French trading post in 1608.",
  "The Plains of Abraham is a large urban park with pivotal battle history.",
  "Chateau Frontenac dominates the skyline above the river.",
  "Terrasse Dufferin is a wooden boardwalk with sweeping river views.",
  "The Funiculaire links Upper and Lower Town in minutes.",
  "Quebec City is the capital of the province of Quebec.",
  "The Parliament Building anchors Upper Town civic life.",
  "Winter is celebrated with outdoor skating and snowy festivals.",
  "The old city is compact and walkable, ideal for short winter loops.",
  "Cobblestone streets and stone walls give Old Quebec its old-world feel.",
  "French is the everyday language of the city.",
  "French and British influences blend in architecture and street names.",
  "The St. Lawrence can feel windy in winter - dress for it.",
  "The toboggan slide under the Chateau is a classic winter thrill."
];

let triviaIndex = 0;
const renderTrivia = () => {
  if (!triviaCard) {
    return;
  }
  triviaCard.textContent = trivia[triviaIndex];
};

if (triviaPrev && triviaNext) {
  triviaPrev.addEventListener("click", () => {
    triviaIndex = (triviaIndex - 1 + trivia.length) % trivia.length;
    renderTrivia();
  });

  triviaNext.addEventListener("click", () => {
    triviaIndex = (triviaIndex + 1) % trivia.length;
    renderTrivia();
  });

  renderTrivia();
}

const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");

if (quizForm) {
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const cards = Array.from(quizForm.querySelectorAll(".quiz-card"));
    let score = 0;

    cards.forEach((card, index) => {
      const answer = card.dataset.answer;
      const selected = quizForm.querySelector(`input[name="q${index + 1}"]:checked`);
      const isCorrect = selected && selected.value === answer;
      card.classList.toggle("is-correct", isCorrect);
      card.classList.toggle("is-wrong", selected && !isCorrect);
      if (isCorrect) {
        score += 1;
      }
    });

    if (quizResult) {
      quizResult.textContent = `Score: ${score} / ${cards.length}`;
    }
  });
}
