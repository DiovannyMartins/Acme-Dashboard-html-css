import { $, safeOn } from "../utils/dom.js";

export function initWebhookModal() {
  const openBtn = $("#btnOpenWebhook");
  const overlay = $("#webhookModalOverlay");
  const modal = $("#webhookModal");
  const closeBtn = $("#btnCloseWebhookModal");
  const form = $("#webhookForm");
  const urlInput = $("#webhookUrl");
  const urlError = $("#webhookUrlError");

  if (!openBtn || !overlay || !modal || !closeBtn || !form) return;

  let lastFocused;

  function open() {
    lastFocused = document.activeElement;
    overlay.classList.add("modal__overlay--active");
    modal.classList.add("modal--active");
    overlay.setAttribute("aria-hidden", "false");

    requestAnimationFrame(() => {
      closeBtn.focus();
    });

    document.addEventListener("keydown", trapFocus);
  }

  function close() {
    overlay.classList.remove("modal__overlay--active");
    modal.classList.remove("modal--active");
    overlay.setAttribute("aria-hidden", "true");
    clearErrors();

    document.removeEventListener("keydown", trapFocus);

    if (lastFocused) {
      lastFocused.focus();
    }
  }

  function trapFocus(event) {
    if (event.key === "Escape") {
      close();
      return;
    }

    if (event.key !== "Tab") return;

    const focusable = modal.querySelectorAll(
      'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function validateUrl() {
    const value = urlInput.value.trim();

    if (!value) {
      urlError.textContent = "A URL é obrigatória.";
      urlInput.setAttribute("aria-invalid", "true");
      return false;
    }

    try {
      new URL(value);
      urlError.textContent = "";
      urlInput.setAttribute("aria-invalid", "false");
      return true;
    } catch {
      urlError.textContent = "Informe uma URL válida (ex: https://exemplo.com/webhook).";
      urlInput.setAttribute("aria-invalid", "true");
      return false;
    }
  }

  function clearErrors() {
    if (urlError) urlError.textContent = "";
    if (urlInput) urlInput.setAttribute("aria-invalid", "false");
  }

  safeOn(openBtn, "click", open);
  safeOn(closeBtn, "click", close);
  safeOn(overlay, "click", close);

  safeOn(urlInput, "blur", validateUrl);
  safeOn(urlInput, "input", () => {
    if (urlInput.getAttribute("aria-invalid") === "true") {
      validateUrl();
    }
  });

  safeOn(form, "submit", (event) => {
    event.preventDefault();

    if (!validateUrl()) {
      urlInput.focus();
      return;
    }

    alert("Webhook configurado com sucesso! (simulação)");
    form.reset();
    clearErrors();
    close();
  });
}
