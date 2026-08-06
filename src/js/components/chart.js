import { formatCurrency } from "../utils/formatters.js";
import { $ } from "../utils/dom.js";

const CHART_DATA = [
  { day: "Seg", value: 12400, height: 40 },
  { day: "Ter", value: 14200, height: 55 },
  { day: "Qua", value: 19800, height: 85 },
  { day: "Qui", value: 11100, height: 30 },
  { day: "Sex", value: 22400, height: 95 },
  { day: "Sab", value: 16000, height: 65 },
  { day: "Dom", value: 18500, height: 75 },
];

export function initChart() {
  const container = $("#chart");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  CHART_DATA.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("chart__bar-wrapper");

    const tooltip = document.createElement("div");
    tooltip.classList.add("chart__tooltip");
    tooltip.textContent = formatCurrency(item.value);

    const bar = document.createElement("div");
    bar.classList.add("chart__bar");
    bar.style.height = `${item.height}%`;
    bar.setAttribute("role", "presentation");

    const label = document.createElement("span");
    label.classList.add("chart__label");
    label.textContent = item.day;

    wrapper.append(tooltip, bar, label);
    fragment.appendChild(wrapper);
  });

  const table = document.createElement("table");
  table.classList.add("sr-only");
  table.setAttribute("aria-label", "Dados do volume de requisições");

  const caption = document.createElement("caption");
  caption.textContent = "Volume de requisições por dia da semana";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const thDay = document.createElement("th");
  thDay.setAttribute("scope", "col");
  thDay.textContent = "Dia";

  const thValue = document.createElement("th");
  thValue.setAttribute("scope", "col");
  thValue.textContent = "Valor";

  headerRow.append(thDay, thValue);
  thead.appendChild(headerRow);

  const tbody = document.createElement("tbody");
  CHART_DATA.forEach((item) => {
    const row = document.createElement("tr");

    const tdDay = document.createElement("td");
    tdDay.textContent = item.day;

    const tdValue = document.createElement("td");
    tdValue.textContent = formatCurrency(item.value);

    row.append(tdDay, tdValue);
    tbody.appendChild(row);
  });

  table.append(caption, thead, tbody);

  fragment.appendChild(table);
  container.appendChild(fragment);
}
