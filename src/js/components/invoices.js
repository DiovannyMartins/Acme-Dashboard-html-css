import { formatCurrency } from "../utils/formatters.js";
import { getItem, setItem } from "../utils/storage.js";
import { $ } from "../utils/dom.js";

const DEFAULT_INVOICES = [
  {
    client: "Acme Engineering",
    status: "Pago",
    amount: 250.0,
    id: "inv_81a7x2",
  },
  {
    client: "Stark Industries",
    status: "Pago",
    amount: 1200.0,
    id: "inv_24b9z1",
  },
  {
    client: "Wayne Enterprises",
    status: "Pendente",
    amount: 850.0,
    id: "inv_90p2m4",
  },
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
    const pillClass =
      invoice.status === "Pago" ? "badge badge--success" : "badge";

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="table__client">${invoice.client}</td>
      <td><span class="${pillClass}">${invoice.status}</span></td>
      <td>${formatCurrency(invoice.amount)}</td>
      <td><span class="table__transaction-id">${invoice.id}</span></td>
    `;
    fragment.appendChild(row);
  });

  tbody.appendChild(fragment);
}
