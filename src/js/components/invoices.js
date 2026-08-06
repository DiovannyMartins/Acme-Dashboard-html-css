import { formatCurrency } from "../utils/formatters.js";
import { getItem, setItem } from "../utils/storage.js";
import { escapeHtml } from "../utils/escapeHtml.js";
import { $ } from "../utils/dom.js";

const DEFAULT_INVOICES = [
  { client: "Acme Engineering", status: "Pago", amount: 250.0, id: "inv_81a7x2" },
  { client: "Stark Industries", status: "Pago", amount: 1200.0, id: "inv_24b9z1" },
  { client: "Wayne Enterprises", status: "Pendente", amount: 850.0, id: "inv_90p2m4" },
];

function getInvoices() {
  const saved = getItem("invoices");
  return saved && saved.length > 0 ? saved : DEFAULT_INVOICES;
}

function saveInvoices(invoices) {
  setItem("invoices", invoices);
}

export function initInvoices() {
  const tbody = $("#invoicesTable");
  if (!tbody) return;

  const invoices = getInvoices();
  saveInvoices(invoices);

  const fragment = document.createDocumentFragment();

  invoices.forEach((invoice) => {
    const pillClass = invoice.status === "Pago" ? "badge badge--success" : "badge";

    const row = document.createElement("tr");

    const tdClient = document.createElement("td");
    tdClient.classList.add("table__client");
    tdClient.textContent = invoice.client;

    const tdStatus = document.createElement("td");
    const statusSpan = document.createElement("span");
    statusSpan.className = pillClass;
    statusSpan.textContent = invoice.status;
    tdStatus.appendChild(statusSpan);

    const tdAmount = document.createElement("td");
    tdAmount.textContent = formatCurrency(invoice.amount);

    const tdId = document.createElement("td");
    const idSpan = document.createElement("span");
    idSpan.classList.add("table__transaction-id");
    idSpan.textContent = invoice.id;
    tdId.appendChild(idSpan);

    row.append(tdClient, tdStatus, tdAmount, tdId);
    fragment.appendChild(row);
  });

  tbody.appendChild(fragment);
}
