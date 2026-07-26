import { $, $$, safeOn } from "../utils/dom.js";

export function initMenu() {
  const menuToggle = $("#menuToggle");
  const menuOverlay = $("#menuOverlay");
  const sidebar = $(".sidebar");

  if (!menuToggle || !menuOverlay || !sidebar) return;

  function open() {
    sidebar.classList.add("sidebar--active");
    menuOverlay.classList.add("menu-overlay--active");
    document.body.classList.add("menu--open");
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function close() {
    sidebar.classList.remove("sidebar--active");
    menuOverlay.classList.remove("menu-overlay--active");
    document.body.classList.remove("menu--open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  safeOn(menuToggle, "click", open);
  safeOn(menuOverlay, "click", close);

  $$(".sidebar__nav-link").forEach((link) => {
    safeOn(link, "click", close);
  });

  safeOn(document, "keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("sidebar--active")) {
      close();
      menuToggle.focus();
    }
  });
}
