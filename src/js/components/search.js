import { $, safeOn } from "../utils/dom.js";

export function initSearch() {
  const searchInput = $("#searchInput");
  if (!searchInput) return;

  safeOn(document, "keydown", (event) => {
    const isK = event.key.toLowerCase() === "k";
    const withModifier = event.ctrlKey || event.metaKey;

    if (withModifier && isK) {
      event.preventDefault();
      searchInput.focus();
    }
  });
}
