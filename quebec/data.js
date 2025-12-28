const QC_DATA = {
  map: {
    width: 1600,
    height: 1000
  },
  items: [
    {
      id: "old-quebec-walk",
      name: "Old Quebec Walking",
      category: "activity",
      tags: ["snowy", "historic", "views", "family"],
      summary: "Cobblestoned streets, fortified walls, and storybook architecture.",
      details: "Short loops from the hotel keep it easy and flexible.",
      x: 900,
      y: 410,
      maps: "https://www.google.com/maps/search/?api=1&query=Old+Quebec+City+QC",
      links: [
        { label: "Video tour", url: "https://www.youtube.com/watch?v=0o9ibwYiASc" }
      ]
    },
    {
      id: "terrasse-dufferin",
      name: "Terrasse Dufferin",
      category: "sight",
      tags: ["snowy", "views", "historic"],
      summary: "Boardwalk over the St. Lawrence with winter lights.",
      details: "Best near sunset or after dinner.",
      x: 910,
      y: 420,
      maps: "https://www.google.com/maps/search/?api=1&query=Terrasse+Dufferin+Quebec+City+QC",
      links: [
        { label: "Official site", url: "https://www.quebec-cite.com/en/what-to-do-quebec-city/dufferin-terrace" }
      ]
    },
    {
      id: "toboggan",
      name: "Toboggan Slide",
      category: "activity",
      tags: ["snowy", "family", "quick"],
      summary: "Fast sled ride beneath Chateau Frontenac.",
      details: "A short burst of winter joy.",
      x: 900,
      y: 430,
      maps: "https://www.google.com/maps/search/?api=1&query=Toboggan+Slide+Terrasse+Dufferin+Quebec+City+QC",
      links: [
        { label: "Tickets", url: "https://au1884.ca/toboggan-slide-tickets/" }
      ]
    },
    {
      id: "funiculaire",
      name: "Funiculaire",
      category: "activity",
      tags: ["quick", "views", "family"],
      summary: "Cable car between Upper and Lower Town.",
      details: "Good once as a novelty or to save legs.",
      x: 980,
      y: 470,
      maps: "https://www.google.com/maps/search/?api=1&query=Funiculaire+du+Vieux+Quebec+Quebec+City+QC",
      links: [
        { label: "Info", url: "https://www.quebec-cite.com/fr/entreprises/funiculaire-du-vieux-quebec" }
      ]
    },
    {
      id: "musee-civilisation",
      name: "Musee de la civilisation",
      category: "activity",
      tags: ["culture", "historic", "family", "cozy"],
      summary: "Interactive museum on Quebec and Indigenous history.",
      details: "Modern, engaging, and not overwhelming.",
      x: 1060,
      y: 560,
      maps: "https://www.google.com/maps/search/?api=1&query=Musee+de+la+civilisation+Quebec+City+QC",
      links: [
        { label: "Museum", url: "https://mcq.org/" }
      ]
    },
    {
      id: "plains-abraham",
      name: "Plains of Abraham",
      category: "sight",
      tags: ["snowy", "views", "family"],
      summary: "Broad urban park with winter paths.",
      details: "A change of pace from old city streets.",
      x: 520,
      y: 260,
      maps: "https://www.google.com/maps/search/?api=1&query=Plains+of+Abraham+Quebec+City+QC",
      links: [
        { label: "Park site", url: "https://www.plainsofabraham.ca/" }
      ]
    },
    {
      id: "place-dyouville",
      name: "Place d'Youville Skating",
      category: "activity",
      tags: ["snowy", "family", "quick"],
      summary: "Outdoor rink beside the city walls.",
      details: "Rentals available and festive at dusk.",
      x: 820,
      y: 360,
      maps: "https://www.google.com/maps/search/?api=1&query=Place+D+Youville+Quebec+City+QC",
      links: [
        { label: "Skating info", url: "https://www.quebec-cite.com/en/businesses/patinoire-de-la-place-dyouville" }
      ]
    },
    {
      id: "carriage",
      name: "Horse-Drawn Carriage",
      category: "activity",
      tags: ["historic", "cozy", "views"],
      summary: "Slow, storybook ride through snowy streets.",
      details: "Low effort, high charm.",
      x: 880,
      y: 400,
      maps: "https://www.google.com/maps/search/?api=1&query=Caleches+Quebec+City+QC",
      links: [
        { label: "Caleches Quebec", url: "https://www.calechesquebec.com/en/" }
      ]
    },
    {
      id: "chateau-frontenac",
      name: "Chateau Frontenac",
      category: "sight",
      tags: ["historic", "views"],
      summary: "Iconic castle-like hotel above the river.",
      details: "One of the most photographed hotels in the world.",
      x: 900,
      y: 380,
      maps: "https://www.google.com/maps/search/?api=1&query=Chateau+Frontenac+Quebec+City+QC",
      links: [
        { label: "Hotel", url: "https://www.chateau-frontenac.com/en/" }
      ]
    },
    {
      id: "frontenac-brunch",
      name: "Chateau Frontenac Brunch",
      category: "food",
      meal: "breakfast",
      tags: ["food", "cozy", "historic"],
      summary: "Elegant buffet brunch in an iconic setting.",
      details: "A celebratory meal with old-world grandeur.",
      x: 900,
      y: 370,
      maps: "https://www.google.com/maps/search/?api=1&query=Champlain+Restaurant+Chateau+Frontenac+Quebec+City+QC",
      links: [
        { label: "Champlain", url: "https://www.chateau-frontenac.com/en/dine/champlain/" }
      ]
    },
    {
      id: "hilton",
      name: "Hilton Quebec City",
      category: "hotel",
      tags: ["cozy", "quick"],
      summary: "Central basecamp with rooftop pool.",
      details: "Near Porte Saint-Jean and Old Quebec.",
      x: 760,
      y: 300,
      maps: "https://www.google.com/maps/search/?api=1&query=Hilton+Quebec+City+1100+Rene+Levesque+E+Quebec+QC",
      links: []
    },
    {
      id: "gare-palais",
      name: "Gare du Palais",
      category: "transit",
      tags: ["quick"],
      summary: "VIA Rail station in Quebec City.",
      details: "Gateway for Montreal connections.",
      x: 1140,
      y: 620,
      maps: "https://www.google.com/maps/search/?api=1&query=Gare+du+Palais+Quebec+City+QC",
      links: []
    },
    {
      id: "au-petit-chalet",
      name: "Au Petit Chalet",
      category: "food",
      meal: "breakfast",
      tags: ["food", "cozy", "family"],
      summary: "Casual diner with Quebec-style breakfast and poutine.",
      details: "Kid-friendly comfort food and generous portions.",
      x: 730,
      y: 330,
      maps: "https://www.google.com/maps/search/?api=1&query=Au+Petit+Chalet+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.com/biz/au-petit-chalet-qu%C3%A9bec" }
      ]
    },
    {
      id: "apotek",
      name: "Cafe APOTEK",
      category: "food",
      meal: "breakfast",
      tags: ["food", "cozy", "quick"],
      summary: "Coffee and pastries for quick warmups.",
      details: "Perfect for a mid-morning pause.",
      x: 900,
      y: 400,
      maps: "https://www.google.com/maps/search/?api=1&query=Cafe+Apotek+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://m.yelp.com/biz/apotek-qu%C3%A9bec" }
      ]
    },
    {
      id: "buffet-antiquaire",
      name: "Buffet de l'Antiquaire",
      category: "food",
      meal: "breakfast",
      tags: ["food", "cozy", "historic"],
      summary: "Classic local diner with hearty Quebec comfort food.",
      details: "No-nonsense and filling.",
      x: 1090,
      y: 590,
      maps: "https://www.google.com/maps/search/?api=1&query=Buffet+de+l+Antiquaire+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.ca/biz/le-buffet-de-l-antiquaire-qu%C3%A9bec-2" }
      ]
    },
    {
      id: "la-buche",
      name: "La Buche",
      category: "food",
      meal: "breakfast",
      tags: ["food", "cozy", "historic"],
      summary: "Traditional Quebecois comfort food with maple flavors.",
      details: "Fun, informal, and full of local flavor.",
      x: 910,
      y: 450,
      maps: "https://www.google.com/maps/search/?api=1&query=La+Buche+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.com/biz/la-b%C3%BBche-qu%C3%A9bec-2" }
      ]
    },
    {
      id: "cochon-dingue",
      name: "Le Cochon Dingue",
      category: "food",
      meal: "breakfast",
      tags: ["food", "family", "cozy"],
      summary: "Reliable brasserie with a large menu.",
      details: "Family friendly and easygoing.",
      x: 920,
      y: 380,
      maps: "https://www.google.com/maps/search/?api=1&query=Le+Cochon+Dingue+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.com/biz/cochon-dingue-qu%C3%A9bec-5" }
      ]
    },
    {
      id: "petite-cabane",
      name: "La Petite Cabane a Sucre",
      category: "food",
      meal: "breakfast",
      tags: ["food", "cozy", "culture"],
      summary: "Sugar shack classics with maple-forward comfort food.",
      details: "Rustic and deeply Quebecois.",
      x: 600,
      y: 360,
      maps: "https://www.google.com/maps/search/?api=1&query=La+Petite+Cabane+a+Sucre+Quebec+City+QC",
      links: [
        { label: "Website", url: "https://www.petitecabane.com/" }
      ]
    },
    {
      id: "anciens-canadiens",
      name: "Aux Anciens Canadiens",
      category: "food",
      meal: "dinner",
      tags: ["food", "historic", "cozy"],
      summary: "Historic, candlelit restaurant in a centuries-old building.",
      details: "Traditional dishes in old-world atmosphere.",
      x: 905,
      y: 390,
      maps: "https://www.google.com/maps/search/?api=1&query=Aux+Anciens+Canadiens+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.com/biz/aux-anciens-canadiens-qu%C3%A9bec" }
      ]
    },
    {
      id: "bistro-1640",
      name: "Bistro 1640",
      category: "food",
      meal: "dinner",
      tags: ["food", "historic", "cozy"],
      summary: "French-Quebecois cuisine in Place Royale.",
      details: "Cozy and slightly elevated.",
      x: 1020,
      y: 500,
      maps: "https://www.google.com/maps/search/?api=1&query=Bistro+1640+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.com/biz/bistro-1640-qu%C3%A9bec" }
      ]
    },
    {
      id: "bistro-orygine",
      name: "Bistro L'Orygine",
      category: "food",
      meal: "dinner",
      tags: ["food", "cozy"],
      summary: "Modern bistro emphasizing seasonal ingredients.",
      details: "Special but accessible.",
      x: 870,
      y: 360,
      maps: "https://www.google.com/maps/search/?api=1&query=Bistro+L+Orygine+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.com/biz/l-orygine-qu%C3%A9bec" }
      ]
    },
    {
      id: "bossini",
      name: "Bossini",
      category: "food",
      meal: "dinner",
      tags: ["food", "family", "cozy"],
      summary: "Modern Italian trattoria with pizzas and pastas.",
      details: "Great for New Year's Eve without heavy formality.",
      x: 700,
      y: 310,
      maps: "https://www.google.com/maps/search/?api=1&query=Bossini+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.com/biz/bossini-qu%C3%A9bec" }
      ]
    },
    {
      id: "cabu",
      name: "Cabu Boire Et Manger",
      category: "food",
      meal: "dinner",
      tags: ["food", "cozy", "quick"],
      summary: "Relaxed bistro inside the Hilton.",
      details: "Perfect for an easy dinner without leaving the hotel.",
      x: 770,
      y: 305,
      maps: "https://www.google.com/maps/search/?api=1&query=Cabu+Boire+Et+Manger+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.com/biz/cabu-boire-et-manger-vieux-qu%C3%A9bec" }
      ]
    },
    {
      id: "cafe-du-monde",
      name: "Cafe du Monde",
      category: "food",
      meal: "dinner",
      tags: ["food", "views", "cozy"],
      summary: "Bright dining with river views and flexible hours.",
      details: "Works well for breakfast or early dinner.",
      x: 1040,
      y: 570,
      maps: "https://www.google.com/maps/search/?api=1&query=Cafe+du+Monde+Quebec+City+QC",
      links: []
    },
    {
      id: "hono",
      name: "Hono Izakaya + Ramen",
      category: "food",
      meal: "dinner",
      tags: ["food", "cozy"],
      summary: "Two Japanese dining experiences in one.",
      details: "Izakaya for small plates, ramen for rich bowls.",
      x: 680,
      y: 330,
      maps: "https://www.google.com/maps/search/?api=1&query=Hono+Izakaya+Quebec+City+QC",
      links: [
        { label: "Izakaya", url: "https://www.yelp.ca/biz/hon%C5%8D-izakaya-qu%C3%A9bec" },
        { label: "Ramen", url: "https://m.yelp.com/biz/hon%C5%8D-ramen-qu%C3%A9bec" }
      ]
    },
    {
      id: "poutineville",
      name: "Restaurant Poutineville",
      category: "food",
      meal: "dinner",
      tags: ["food", "cozy", "family"],
      summary: "Build-your-own poutine with dozens of toppings.",
      details: "A comfort-food classic for a cold day.",
      x: 940,
      y: 450,
      maps: "https://www.google.com/maps/search/?api=1&query=Restaurant+Poutineville+Vieux+Quebec+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.ca/biz/restaurant-poutineville-vieux-qu%C3%A9bec-qu%C3%A9bec-2" }
      ]
    },
    {
      id: "erico",
      name: "Erico Chocolaterie",
      category: "dessert",
      meal: "dessert",
      tags: ["sweet", "cozy", "quick"],
      summary: "Chocolate shop and mini-museum.",
      details: "Ideal for a quick cocoa break.",
      x: 720,
      y: 260,
      maps: "https://www.google.com/maps/search/?api=1&query=Erico+Chocolaterie+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.ca/biz/%C3%A9rico-qu%C3%A9bec-3" }
      ]
    },
    {
      id: "maison-smith",
      name: "La Maison Smith",
      category: "dessert",
      meal: "dessert",
      tags: ["sweet", "cozy", "quick"],
      summary: "Local favorite for hot chocolate and pastries.",
      details: "Warm up between walks with excellent coffee.",
      x: 910,
      y: 410,
      maps: "https://www.google.com/maps/search/?api=1&query=La+Maison+Smith+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://m.yelp.com/biz/la-maison-smith-quebec-6" }
      ]
    },
    {
      id: "maple-taffy",
      name: "Maple Taffy on Snow",
      category: "dessert",
      meal: "dessert",
      tags: ["sweet", "snowy", "quick"],
      summary: "Seasonal pop-ups with maple syrup rolled on snow.",
      details: "A classic Quebec winter treat.",
      x: 980,
      y: 580,
      maps: "https://www.google.com/maps/search/?api=1&query=Maple+Taffy+on+Snow+Old+Quebec+City+QC",
      links: []
    },
    {
      id: "paillard",
      name: "Paillard",
      category: "dessert",
      meal: "dessert",
      tags: ["sweet", "cozy"],
      summary: "European-style bakery with excellent pastries.",
      details: "Lively daytime stop with light lunch options.",
      x: 740,
      y: 260,
      maps: "https://www.google.com/maps/search/?api=1&query=Paillard+Quebec+City+QC",
      links: [
        { label: "Yelp", url: "https://www.yelp.ca/biz/paillard-qu%C3%A9bec-2" }
      ]
    }
  ]
};
