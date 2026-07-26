import { $, $$, safeOn } from "../utils/dom.js";

export function initWorkspaceDropdown() {
  const selector = $("#workspaceSelector");
  const dropdown = $("#workspaceDropdown");
  const nameEl = $(".topbar__workspace-name");

  if (!selector || !dropdown || !nameEl) return;

  function toggle() {
    const isActive = dropdown.classList.toggle("dropdown--active");
    selector.setAttribute("aria-expanded", String(isActive));
  }

  function close() {
    dropdown.classList.remove("dropdown--active");
    selector.setAttribute("aria-expanded", "false");
  }

  safeOn(selector, "click", (event) => {
    event.stopPropagation();
    toggle();
  });

  safeOn(selector, "keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });

  $$(".dropdown__option", dropdown).forEach((option) => {
    safeOn(option, "click", () => {
      nameEl.textContent = option.dataset.nome;
      $$(".dropdown__option", dropdown).forEach((o) => o.setAttribute("aria-selected", "false"));
      option.setAttribute("aria-selected", "true");
      close();
      selector.focus();
    });
  });

  safeOn(document, "click", close);

  safeOn(document, "keydown", (event) => {
    if (event.key === "Escape") close();
  });
}
