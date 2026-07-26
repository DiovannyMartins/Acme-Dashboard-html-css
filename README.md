# Acme Dashboard

Dashboard SaaS premium desenvolvido com HTML, CSS e JavaScript puro, focado em performance, acessibilidade e organização de código.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Responsive](https://img.shields.io/badge/Responsive-Sim-green?style=for-the-badge)

---

## Destaques

- 100% JavaScript Vanilla
- Zero dependências
- Mobile First
- Acessível (ARIA, skip link, focus visible)
- SEO otimizado (Open Graph, sitemap, robots.txt)
- CSS modular com BEM

---

## Demo

[Ver ao vivo](https://diovannymartins.github.io/business-dashboard/)

---

## Tecnologias

| Stack | Detalhe |
|-------|---------|
| HTML5 | Semântica, ARIA, meta tags Open Graph/Twitter Card |
| CSS3 | Variáveis CSS, Grid, Flexbox, `@import` modular, BEM, unidades `rem` |
| JavaScript (ES6+) | ES Modules, sem dependências externas |
| Git/GitHub | Versionamento e deploy via GitHub Pages |

---

## Sobre o projeto

O projeto foi desenvolvido com foco em simplicidade, desempenho e facilidade de manutenção. As decisões técnicas principais:

- **Zero dependências**: nenhum framework, nenhum build step. Abre o `index.html` e funciona.
- **CSS modular com `@import`**: base (reset, variáveis), layout (sidebar, topbar, main) e componentes (card, chart, table, feed, modal, dropdown, etc.) separados em arquivos independentes.
- **BEM (Block Element Modifier)**: nomenclatura consistente em todo o CSS e HTML (`.card__header`, `.badge--success`).
- **JavaScript em ES Modules**: cada funcionalidade (menu, busca, gráfico, faturas, feed, dropdowns, modal) vive em seu próprio módulo. O `app.js` apenas inicializa — sem acoplamento.
- **Acessibilidade como requisito**: skip link, ARIA labels, `aria-live` no feed, `aria-expanded` nos dropdowns, focus trap no modal, navegação por teclado (Tab, Enter, Escape), focus visible customizado.
- **Performance**: `DocumentFragment` para inserções em lote, debounce em eventos, `localStorage` com try/catch.
- **SEO**: `sitemap.xml`, `robots.txt`, Open Graph, Twitter Card, favicon SVG inline, heading hierarchy correta.

---

## Funcionalidades

- **Menu mobile** com animação e fechamento ao clicar fora ou pressionar Escape
- **Atalho de teclado** ⌘K / Ctrl+K para focar na busca
- **Gráfico de barras** dinâmico com tooltips
- **Tabela de faturas** com persistência via `localStorage`
- **Feed de atividades** com `aria-live` para atualizações
- **Dropdown de workspace** com navegação por teclado
- **Dropdown do usuário** com `aria-haspopup` e `aria-expanded`
- **Modal de webhook** com focus trap, validação de URL e feedback de erro
- **Footer dinâmico** com ano atual via JavaScript
- **Skip link** para navegação por teclado
- **Formulário com validação** client-side com mensagens de erro claras

---

## Como rodar localmente

Pré-requisitos: nenhum. Apenas um navegador moderno.

```bash
# 1. Clone o repositório
git clone https://github.com/DiovannyMartins/business-dashboard.git

# 2. Entre na pasta
cd business-dashboard

# 3. Abra no navegador
# Opção A: duplo clique no index.html
# Opção B: Live Server no VS Code (recomendado para ES Modules)
```

Não há `npm install`, não há build, não há variáveis de ambiente. É static-first por design.

> **Nota**: Para que os ES Modules funcionem, é necessário servir o projeto via um servidor local (Live Server, `python -m http.server`, etc.). Abrir diretamente via `file://` pode bloquear os imports.

---

## Estrutura de pastas

```
business-dashboard/
├── src/
│   ├── css/
│   │   ├── base/
│   │   │   ├── variables.css      # Variáveis CSS (cores, espaçamentos)
│   │   │   └── reset.css          # Reset, acessibilidade (skip link, sr-only, focus)
│   │   ├── layout/
│   │   │   ├── sidebar.css        # Sidebar e navegação
│   │   │   ├── topbar.css         # Barra superior
│   │   │   └── main.css           # Conteúdo principal e grids
│   │   ├── components/
│   │   │   ├── card.css           # Cards de métricas
│   │   │   ├── chart.css          # Gráfico de barras
│   │   │   ├── table.css          # Tabela de faturas
│   │   │   ├── feed.css           # Feed de atividades
│   │   │   ├── modal.css          # Modal de webhook
│   │   │   ├── dropdown.css       # Dropdowns (workspace, usuário)
│   │   │   ├── search.css         # Campo de busca
│   │   │   ├── button.css         # Botões
│   │   │   ├── empty-state.css    # Estado vazio
│   │   │   ├── badge.css          # Badges de status
│   │   │   ├── overlay.css        # Overlay do menu mobile
│   │   │   ├── user-profile.css   # Perfil do usuário
│   │   │   └── footer.css         # Rodapé
│   │   ├── responsive.css         # Media queries
│   │   └── main.css               # Entry point (importa todos os módulos)
│   ├── js/
│   │   ├── components/
│   │   │   ├── menu.js            # Menu mobile
│   │   │   ├── search.js          # Busca com atalho de teclado
│   │   │   ├── chart.js           # Gráfico de barras
│   │   │   ├── invoices.js        # Tabela de faturas
│   │   │   ├── feed.js            # Feed de atividades
│   │   │   ├── workspaceDropdown.js # Dropdown de workspace
│   │   │   ├── userDropdown.js    # Dropdown do usuário
│   │   │   ├── webhookModal.js    # Modal com validação e focus trap
│   │   │   └── footerYear.js      # Ano dinâmico no footer
│   │   ├── utils/
│   │   │   ├── debounce.js        # Debounce para eventos
│   │   │   ├── dom.js             # Helpers de DOM ($, $$, safeOn)
│   │   │   ├── formatters.js      # Formatação de moeda
│   │   │   └── storage.js         # Wrapper para localStorage
│   │   └── app.js                 # Entry point (inicializa módulos)
│   └── assets/
│       └── img/                   # Imagens e ícones
├── index.html                     # Página principal
├── robots.txt                     # Diretrizes para crawlers
├── sitemap.xml                    # Mapa do site para SEO
└── README.md
```

---

## O que aprendi

- **Manipulação do DOM** — criação de elementos com `DocumentFragment` para performance, event delegation
- **Organização de código** — separação em módulos ES6, cada funcionalidade isolada e independente
- **CSS modular com BEM** — nomenclatura consistente, sem especificidade excessiva, sem `!important`
- **Acessibilidade** — ARIA labels, focus trap em modais, navegação por teclado, skip link, `aria-live`
- **Performance** — `DocumentFragment`, debounce, `localStorage` com try/catch
- **Validação de formulário** — feedback visual em tempo real com mensagens claras
- **SEO** — Open Graph, Twitter Card, sitemap, robots.txt, heading hierarchy

---

## Testes

Este projeto não possui suite de testes automatizados no momento. A validação é feita manualmente:

- Teste de responsividade (Chrome DevTools: mobile, tablet, desktop)
- Navegação por teclado (Tab, Enter, Escape)
- Validação de formulário (URL vazia, URL inválida)
- Focus trap no modal de webhook
- Dropdowns (abrir, fechar, selecionar opção)
- Persistência de faturas no localStorage

---

## Roadmap / Melhorias futuras

- Migrar para um gerador estático (Astro ou 11ty) para otimizar build
- Adicionar testes E2E com Playwright
- Implementar modo claro/escuro com persistência
- Adicionar gráficos interativos com Canvas ou SVG
- Integrar com API real para dados em tempo real
- Adicionar métricas de performance (Lighthouse CI)

---

## Autor

**Diovanny Martins** — Desenvolvedor Front-End

- **GitHub:** [@DiovannyMartins](https://github.com/DiovannyMartins)
- **LinkedIn:** [Diovanny Martins](https://linkedin.com/in/diovanny-martins)
- **E-mail:** [diovannydev@gmail.com](mailto:diovannydev@gmail.com)

---

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
