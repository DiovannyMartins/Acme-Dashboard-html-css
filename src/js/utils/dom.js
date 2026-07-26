export function $(selector) {
  return document.querySelector(selector);
}

export function $$(selector) {
  return document.querySelectorAll(selector);
}

export function safeOn(element, event, handler) {
  if (element) {
    element.addEventListener(event, handler);
  }
}
