import { $ } from "../utils/dom.js";

const ACTIVITIES = [
  {
    highlighted: true,
    title: "Deploy efetuado em <span>`main`</span>",
    time: "Há 2 minutos por Vercel Bot",
  },
  {
    highlighted: false,
    title: "Nova assinatura de <span>InitechInc.</span>",
    time: "Há 14 minutos • $1,200/ano",
  },
  {
    highlighted: false,
    title: "Upgrade de plano: <span>JohnDoe</span>",
    time: "Há 2 horas",
  },
];

export function initFeed() {
  const container = $("#activityFeed");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  ACTIVITIES.forEach((item) => {
    const dotClass = item.highlighted
      ? "feed__dot feed__dot--accented"
      : "feed__dot";

    const div = document.createElement("div");
    div.classList.add("feed__item");
    div.innerHTML = `
      <div class="${dotClass}"></div>
      <div class="feed__content">
        <p class="feed__title">${item.title}</p>
        <p class="feed__time">${item.time}</p>
      </div>
    `;
    fragment.appendChild(div);
  });

  container.appendChild(fragment);
}
