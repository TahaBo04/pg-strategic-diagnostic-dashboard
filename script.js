const pgBlue = "#003087";
const pgGold = "#C8962E";
const muted = "#5F6B7A";

const dasData = [
  {
    id: "beauty",
    title: "Beauty",
    subtitle: "Soins personnels et beauté",
    details: {
      "Marques principales": "Head & Shoulders, Pantene, Olay, SK-II",
      "Besoins satisfaits": "soin capillaire, beauté, confiance, routine quotidienne",
      "Clients ciblés": "consommateurs soins personnels, segments premium et mass market",
      "Concurrents principaux": "L'Oréal, Unilever, Estée Lauder",
      "Facteurs clés de succès": "innovation, image de marque, efficacité produit, marketing",
      "Enjeu stratégique": "maintenir la différenciation face aux marques locales et premium",
    },
  },
  {
    id: "grooming",
    title: "Grooming",
    subtitle: "Rasage et précision",
    details: {
      "Marques principales": "Gillette, Venus, Braun",
      "Besoins satisfaits": "rasage, soin masculin/féminin, précision, confort",
      "Clients ciblés": "hommes et femmes recherchant performance et fiabilité",
      "Concurrents principaux": "Philips, Wilkinson, marques distributeurs",
      "Facteurs clés de succès": "technologie, qualité, fidélité marque, distribution",
      "Enjeu stratégique": "défendre Gillette face aux offres low-cost et DTC",
    },
  },
  {
    id: "health",
    title: "Health Care",
    subtitle: "Santé quotidienne",
    details: {
      "Marques principales": "Oral-B, Vicks, Pepto-Bismol",
      "Besoins satisfaits": "santé quotidienne, hygiène bucco-dentaire, bien-être",
      "Clients ciblés": "familles, adultes, consommateurs santé préventive",
      "Concurrents principaux": "Colgate, Johnson & Johnson, Haleon",
      "Facteurs clés de succès": "confiance, expertise, conformité, innovation",
      "Enjeu stratégique": "renforcer la crédibilité santé et l'innovation connectée",
    },
  },
  {
    id: "fabric",
    title: "Fabric & Home Care",
    subtitle: "Entretien textile et maison",
    details: {
      "Marques principales": "Tide, Ariel, Febreze, Downy",
      "Besoins satisfaits": "lavage, propreté, entretien maison, fraîcheur",
      "Clients ciblés": "ménages, familles, marchés urbains",
      "Concurrents principaux": "Unilever, Henkel, marques distributeurs",
      "Facteurs clés de succès": "efficacité, coût, disponibilité, durabilité",
      "Enjeu stratégique": "réduire l'impact environnemental sans perdre en performance",
    },
  },
  {
    id: "baby",
    title: "Baby, Feminine & Family Care",
    subtitle: "Protection et confort familial",
    details: {
      "Marques principales": "Pampers, Always, Bounty",
      "Besoins satisfaits": "protection bébé, hygiène féminine, confort familial",
      "Clients ciblés": "parents, femmes, familles",
      "Concurrents principaux": "Kimberly-Clark, Essity, marques locales",
      "Facteurs clés de succès": "confiance, sécurité, qualité, accessibilité",
      "Enjeu stratégique": "adapter les formats et prix aux marchés émergents",
    },
  },
];

const swotData = [
  {
    title: "Forces",
    items: [
      "Marques mondiales puissantes",
      "R&D élevée et continue",
      "Distribution mondiale dans 180+ pays",
      "Rentabilité solide",
      "Supply chain intégrée et digitalisée",
    ],
    analysis:
      "Ces forces donnent à P&G une capacité rare à financer l'innovation, absorber les chocs et imposer ses standards dans la grande consommation.",
  },
  {
    title: "Faiblesses",
    items: [
      "Complexité matricielle",
      "Croissance modérée",
      "Coûts fixes élevés",
      "Dépendance aux grands distributeurs",
      "Risque de bureaucratie",
    ],
    analysis:
      "La taille mondiale peut ralentir les arbitrages. La priorité est de préserver la puissance d'exécution sans multiplier les niveaux de décision.",
  },
  {
    title: "Opportunités",
    items: [
      "Marchés émergents",
      "E-commerce / DTC",
      "Produits durables",
      "IA et personnalisation",
      "Innovation santé/hygiène",
    ],
    analysis:
      "Les relais de croissance les plus crédibles combinent proximité client, données, durabilité et adaptation locale des formats.",
  },
  {
    title: "Menaces",
    items: [
      "Concurrence forte",
      "Marques distributeurs",
      "Inflation matières premières",
      "Réglementation environnementale",
      "Changement rapide des comportements consommateurs",
    ],
    analysis:
      "La pression concurrentielle oblige P&G à défendre la valeur perçue de ses marques tout en maintenant des prix accessibles.",
  },
];

const recommendations = [
  "Accélérer le DTC et l'e-commerce",
  "Réduire la complexité matricielle",
  "Renforcer l'innovation durable",
  "Développer les marchés émergents",
  "Exploiter l'IA dans R&D, marketing et supply chain",
].map((title, index) => ({
  id: `rec-${index + 1}`,
  title,
  impact: index === 0 ? 5 : 4,
  urgence: index === 1 ? 5 : 4,
  faisabilite: index === 2 ? 3 : 4,
}));

function renderDas() {
  const list = document.querySelector("#dasList");
  if (!list) return;

  list.innerHTML = dasData
    .map(
      (item, index) => `
        <button class="das-button${index === 0 ? " is-active" : ""}" type="button" data-das="${item.id}" aria-pressed="${index === 0}">
          <strong>${item.title}</strong>
          <span>${item.subtitle}</span>
        </button>
      `
    )
    .join("");

  list.addEventListener("click", (event) => {
    const button = event.target.closest(".das-button");
    if (!button) return;
    selectDas(button.dataset.das);
  });

  selectDas(dasData[0].id);
}

function selectDas(id) {
  const selected = dasData.find((item) => item.id === id);
  const panel = document.querySelector("#dasDetail");
  if (!selected || !panel) return;

  document.querySelectorAll(".das-button").forEach((button) => {
    const active = button.dataset.das === id;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  panel.innerHTML = `
    <h3>${selected.title}</h3>
    <div class="detail-grid">
      ${Object.entries(selected.details)
        .map(
          ([label, value]) => `
            <div class="detail-item">
              <strong>${label}</strong>
              <p>${value}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderSwot() {
  const matrix = document.querySelector("#swotMatrix");
  if (!matrix) return;

  matrix.innerHTML = swotData
    .map(
      (quadrant, index) => `
        <article class="swot-card">
          <button class="swot-toggle" type="button" aria-expanded="false">
            <strong>${quadrant.title}</strong>
            <span>Analyse +</span>
          </button>
          <div class="swot-body">
            <ul>
              ${quadrant.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <p class="swot-analysis">${quadrant.analysis}</p>
          </div>
        </article>
      `
    )
    .join("");

  matrix.addEventListener("click", (event) => {
    const toggle = event.target.closest(".swot-toggle");
    if (!toggle) return;

    const card = toggle.closest(".swot-card");
    const isOpen = card.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.querySelector("span").textContent = isOpen ? "Analyse -" : "Analyse +";
  });
}

function renderRecommendations() {
  const list = document.querySelector("#recommendationList");
  if (!list) return;

  list.innerHTML = recommendations
    .map(
      (rec) => `
        <article class="recommendation-card" data-id="${rec.id}">
          <h3>${rec.title}</h3>
          <div class="score-controls">
            ${["impact", "urgence", "faisabilite"]
              .map(
                (field) => `
                  <label>
                    ${field === "faisabilite" ? "Faisabilité" : field.charAt(0).toUpperCase() + field.slice(1)}
                    <input type="range" min="1" max="5" value="${rec[field]}" data-field="${field}" aria-label="${field} pour ${rec.title}" />
                    <span class="score-value" data-value="${field}">${rec[field]}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");

  list.addEventListener("input", (event) => {
    if (!event.target.matches("input[type='range']")) return;
    const card = event.target.closest(".recommendation-card");
    const rec = recommendations.find((item) => item.id === card.dataset.id);
    const field = event.target.dataset.field;
    rec[field] = Number(event.target.value);
    card.querySelector(`[data-value="${field}"]`).textContent = event.target.value;
    updateRanking();
  });

  updateRanking();
}

function getRecommendationScore(rec) {
  return rec.impact * 0.45 + rec.urgence * 0.3 + rec.faisabilite * 0.25;
}

function updateRanking() {
  const ranking = document.querySelector("#rankingList");
  if (!ranking) return;

  const sorted = [...recommendations].sort(
    (a, b) => getRecommendationScore(b) - getRecommendationScore(a)
  );

  ranking.innerHTML = sorted
    .map((rec, index) => {
      const score = getRecommendationScore(rec);
      return `
        <div class="rank-item">
          <strong>${index + 1}. ${rec.title}</strong>
          <div class="rank-meta">
            <span>Score pondéré</span>
            <span>${score.toFixed(2)} / 5</span>
          </div>
          <div class="progress" aria-hidden="true"><span style="width: ${(score / 5) * 100}%"></span></div>
        </div>
      `;
    })
    .join("");
}

function createCharts() {
  if (!window.Chart) return;

  Chart.defaults.font.family = "Inter, Arial, sans-serif";
  Chart.defaults.color = muted;

  const years = ["2022", "2023", "2024"];
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 8, right: 8, bottom: 0, left: 0 },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#002B5C",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        padding: 12,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: muted, font: { size: 12 } },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(95, 107, 122, 0.16)" },
        ticks: { color: muted, font: { size: 12 }, maxTicksLimit: 5 },
      },
    },
  };

  const charts = [
    { id: "revenueChart", label: "Md $", data: [80.2, 82.0, 84.0], type: "bar", suggestedMax: 90 },
    { id: "netIncomeChart", label: "Md $", data: [14.7, 14.7, 14.9], type: "bar", suggestedMax: 18 },
    { id: "equityChart", label: "Md $", data: [47.3, 46.5, 50.3], type: "line", suggestedMax: 55 },
    { id: "marginChart", label: "%", data: [18.3, 17.9, 17.7], type: "line", suggestedMax: 22 },
  ];

  charts.forEach((chart) => {
    const element = document.getElementById(chart.id);
    if (!element) return;

    new Chart(element, {
      type: chart.type,
      data: {
        labels: years,
        datasets: [
          {
            label: chart.label,
            data: chart.data,
            backgroundColor: chart.type === "bar" ? [pgBlue, pgBlue, pgGold] : "rgba(0, 48, 135, 0.12)",
            borderColor: chart.type === "line" ? pgBlue : pgBlue,
            borderWidth: 3,
            barThickness: chart.type === "bar" ? 42 : undefined,
            maxBarThickness: chart.type === "bar" ? 48 : undefined,
            categoryPercentage: chart.type === "bar" ? 0.55 : undefined,
            pointBackgroundColor: pgGold,
            pointBorderColor: "#FFFFFF",
            pointBorderWidth: 2,
            pointRadius: 5,
            tension: 0.32,
          },
        ],
      },
      options: {
        ...commonOptions,
        scales: {
          ...commonOptions.scales,
          y: {
            ...commonOptions.scales.y,
            suggestedMax: chart.suggestedMax,
          },
        },
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderDas();
  renderSwot();
  renderRecommendations();
  createCharts();
});
