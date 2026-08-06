import { $ } from "../utils/dom.js";

const ACTIVITIES = [
  { highlighted: true, title: "Deploy efetuado em", highlight: "main", time: "Há 2 minutos por Vercel Bot" },
  { highlighted: false, title: "Nova assinatura de", highlight: "InitechInc.", time: "Há 14 minutos • $1,200/ano" },
  { highlighted: false, title: "Upgrade de plano:", highlight: "JohnDoe", time: "Há 2 horas" },
];

function buildTitle(activity) {
  const p = document.createElement("p");
  p.classList.add("feed__title");
  p.appendChild(document.createTextNode(activity.title + " "));

  const span = document.createElement("span");
  span.textContent = activity.highlight;
  p.appendChild(span);

  return p;
}

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

    const dot = document.createElement("div");
    dot.className = dotClass;

    const content = document.createElement("div");
    content.classList.add("feed__content");

    const titleEl = buildTitle(item);

    const timeEl = document.createElement("p");
    timeEl.classList.add("feed__time");
    timeEl.textContent = item.time;

    content.append(titleEl, timeEl);
    div.append(dot, content);
    fragment.appendChild(div);
  });

  container.appendChild(fragment);
}
