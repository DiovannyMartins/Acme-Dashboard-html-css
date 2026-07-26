import { initMenu } from "./components/menu.js";
import { initSearch } from "./components/search.js";
import { initChart } from "./components/chart.js";
import { initInvoices } from "./components/invoices.js";
import { initFeed } from "./components/feed.js";
import { initWorkspaceDropdown } from "./components/workspaceDropdown.js";
import { initUserDropdown } from "./components/userDropdown.js";
import { initWebhookModal } from "./components/webhookModal.js";
import { initFooterYear } from "./components/footerYear.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initSearch();
  initChart();
  initInvoices();
  initFeed();
  initWorkspaceDropdown();
  initUserDropdown();
  initWebhookModal();
  initFooterYear();
});
