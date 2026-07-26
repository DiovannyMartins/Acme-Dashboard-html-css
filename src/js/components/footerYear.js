import { $ } from "../utils/dom.js";

export function initFooterYear() {
  const el = $("#footerYear");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
}
