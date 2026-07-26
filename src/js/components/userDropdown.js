import { $, safeOn } from "../utils/dom.js";

export function initUserDropdown() {
  const profile = $("#userProfile");
  const dropdown = $("#userDropdown");

  if (!profile || !dropdown) return;

  function toggle() {
    const isActive = dropdown.classList.toggle("dropdown--active");
    profile.setAttribute("aria-expanded", String(isActive));
  }

  function close() {
    dropdown.classList.remove("dropdown--active");
    profile.setAttribute("aria-expanded", "false");
  }

  safeOn(profile, "click", (event) => {
    event.stopPropagation();
    toggle();
  });

  safeOn(profile, "keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });

  safeOn(document, "click", close);

  safeOn(document, "keydown", (event) => {
    if (event.key === "Escape") close();
  });
}
