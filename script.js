/* ===== MENU MOBILE ===== */

const menuToggle = document.getElementById("menuToggle");
const menuOverlay = document.getElementById("menuOverlay");
const sidebar = document.querySelector(".sidebar");

function abrirMenu() {
  sidebar.classList.add("active");
  menuOverlay.classList.add("active");
  document.body.classList.add("menu-aberto");
}

function fecharMenu() {
  sidebar.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("menu-aberto");
}

menuToggle.addEventListener("click", abrirMenu);
menuOverlay.addEventListener("click", fecharMenu);

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-item").forEach((link) => {
  link.addEventListener("click", fecharMenu);
});

/* ===== BUSCA COM ATALHO DE TECLADO ===== */

const searchInput = document.getElementById("searchInput");

document.addEventListener("keydown", (event) => {
  const teclaK = event.key.toLowerCase() === "k";
  const comCtrlOuCmd = event.ctrlKey || event.metaKey;

  if (comCtrlOuCmd && teclaK) {
    event.preventDefault();
    searchInput.focus();
  }
});

/* ===== GRÁFICO DE BARRAS DINÂMICO ===== */

const dadosGrafico = [
  { dia: "Seg", valor: 12400, altura: 40 },
  { dia: "Ter", valor: 14200, altura: 55 },
  { dia: "Qua", valor: 19800, altura: 85 },
  { dia: "Qui", valor: 11100, altura: 30 },
  { dia: "Sex", valor: 22400, altura: 95 },
  { dia: "Sáb", valor: 16000, altura: 65 },
  { dia: "Dom", valor: 18500, altura: 75 },
];

const grafico = document.getElementById("grafico");

function formatarMoeda(valor) {
  return valor.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function renderizarGrafico() {
  dadosGrafico.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("chart-bar-wrapper");
    wrapper.innerHTML = `
      <div class="chart-tooltip">${formatarMoeda(item.valor)}</div>
      <div class="chart-bar" style="height: ${item.altura}%"></div>
      <span class="chart-label">${item.dia}</span>
    `;
    grafico.appendChild(wrapper);
  });
}

renderizarGrafico();

/* ===== TABELA DE FATURAS (dinâmica, com localStorage) ===== */

const faturasPadrao = [
  {
    cliente: "Acme Engineering",
    status: "Pago",
    valor: 250.0,
    id: "inv_81a7x2",
  },
  {
    cliente: "Stark Industries",
    status: "Pago",
    valor: 1200.0,
    id: "inv_24b9z1",
  },
  {
    cliente: "Wayne Enterprises",
    status: "Pendente",
    valor: 850.0,
    id: "inv_90p2m4",
  },
];

let faturasSalvas = JSON.parse(localStorage.getItem("faturas"));
let faturas =
  faturasSalvas && faturasSalvas.length > 0 ? faturasSalvas : faturasPadrao;

function salvarFaturas() {
  localStorage.setItem("faturas", JSON.stringify(faturas));
}

const tabelaFaturas = document.getElementById("tabelaFaturas");

function renderizarFaturas() {
  tabelaFaturas.innerHTML = "";

  faturas.forEach((fatura) => {
    const classePill =
      fatura.status === "Pago" ? "status-pill active" : "status-pill";

    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td class="cliente">${fatura.cliente}</td>
      <td><span class="${classePill}">${fatura.status}</span></td>
      <td>${formatarMoeda(fatura.valor)}</td>
      <td><span class="id-trans">${fatura.id}</span></td>
    `;
    tabelaFaturas.appendChild(linha);
  });
}

renderizarFaturas();

/* ===== FEED DE ATIVIDADES ===== */

const atividades = [
  {
    destacado: true,
    titulo: "Deploy efetuado em <span>`main`</span>",
    tempo: "Há 2 minutos por Vercel Bot",
  },
  {
    destacado: false,
    titulo: "Nova assinatura de <span>InitechInc.</span>",
    tempo: "Há 14 minutos • $1,200/ano",
  },
  {
    destacado: false,
    titulo: "Upgrade de plano: <span>JohnDoe</span>",
    tempo: "Há 2 horas",
  },
];

const feedAtividades = document.getElementById("feedAtividades");

function renderizarFeed() {
  feedAtividades.innerHTML = "";

  atividades.forEach((item) => {
    const classeDot = item.destacado ? "feed-dot accented" : "feed-dot";

    const div = document.createElement("div");
    div.classList.add("feed-item");
    div.innerHTML = `
      <div class="${classeDot}"></div>
      <div class="feed-content">
        <p class="feed-title">${item.titulo}</p>
        <p class="feed-time">${item.tempo}</p>
      </div>
    `;
    feedAtividades.appendChild(div);
  });
}

renderizarFeed();

/* ===== DROPDOWN DE WORKSPACE ===== */

const workspaceSelector = document.getElementById("workspaceSelector");
const workspaceDropdown = document.getElementById("workspaceDropdown");
const workspaceName = document.querySelector(".workspace-name");

workspaceSelector.addEventListener("click", (event) => {
  event.stopPropagation();
  workspaceDropdown.classList.toggle("active");
});

document.querySelectorAll(".workspace-option").forEach((opcao) => {
  opcao.addEventListener("click", () => {
    workspaceName.textContent = opcao.dataset.nome;
    workspaceDropdown.classList.remove("active");
  });
});

document.addEventListener("click", () => {
  workspaceDropdown.classList.remove("active");
});

/* ===== DROPDOWN DO USUÁRIO ===== */

const userProfile = document.getElementById("userProfile");
const userDropdown = document.getElementById("userDropdown");

userProfile.addEventListener("click", (event) => {
  event.stopPropagation();
  userDropdown.classList.toggle("active");
});

document.addEventListener("click", () => {
  userDropdown.classList.remove("active");
});

/* ===== MODAL DE WEBHOOK ===== */

const btnAbrirWebhook = document.getElementById("btnAbrirWebhook");
const webhookModalOverlay = document.getElementById("webhookModalOverlay");
const webhookModal = document.getElementById("webhookModal");
const btnFecharWebhookModal = document.getElementById("btnFecharWebhookModal");
const formWebhook = document.getElementById("formWebhook");

function abrirWebhookModal() {
  webhookModalOverlay.classList.add("active");
  webhookModal.classList.add("active");
}

function fecharWebhookModal() {
  webhookModalOverlay.classList.remove("active");
  webhookModal.classList.remove("active");
}

btnAbrirWebhook.addEventListener("click", abrirWebhookModal);
btnFecharWebhookModal.addEventListener("click", fecharWebhookModal);
webhookModalOverlay.addEventListener("click", fecharWebhookModal);

formWebhook.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Webhook configurado com sucesso! (simulação)");
  formWebhook.reset();
  fecharWebhookModal();
});
