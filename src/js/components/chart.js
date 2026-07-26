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
    wrapper.innerHTML = `
      <div class="chart__tooltip">${formatCurrency(item.value)}</div>
      <div class="chart__bar" style="height: ${item.height}%" role="presentation"></div>
      <span class="chart__label">${item.day}</span>
    `;
    fragment.appendChild(wrapper);
  });

  container.appendChild(fragment);
}
