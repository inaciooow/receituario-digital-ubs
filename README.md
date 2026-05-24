# 🩺 Receituário Digital

> Ferramenta web para preenchimento e impressão de receituários médicos da Unidade Básica de Saúde da Família da Placa e Hospital Municipal de Rio do Pires, município de Rio do Pires / BA.

[![GitHub Pages](https://img.shields.io/badge/Acesse%20o%20projeto-online-2d6a4f?style=for-the-badge&logo=github)](https://inaciooow.github.io/receituario-digital/)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 Sobre o projeto

A UBS Família da Placa e o Hospital Municipal de Rio do Pires utilizavam um modelo de receituário em PDF que precisava ser preenchido manualmente e reimpresso a cada consulta. Este projeto substituiu esse fluxo por uma **ferramenta web leve, sem instalação e sem dependências**, acessível diretamente pelo navegador.

A médica preenche os dados, visualiza o resultado em tempo real e imprime com um clique — gerando as **duas vias do receituário lado a lado** em uma única folha A4, exatamente no formato exigido pela unidade.

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| Pré-visualização em tempo real | O receituário é atualizado instantaneamente conforme o preenchimento |
| Duas vias simultâneas | Imprime as duas cópias lado a lado em uma única página A4 |
| Data automática | Preenchida com a data de hoje, editável quando necessário |
| Data por extenso | Exibe no formato *Rio do Pires, 5 de maio de 2026* |
| Medicamentos dinâmicos | Adicione ou remova quantos quiser, com renumeração automática |
| Contador de caracteres | Alerta visual quando o texto se aproxima do limite do balão |
| Impressão limpa | Oculta a interface e imprime apenas o receituário, sem cabeçalhos do navegador |
| Zero dependências | HTML, CSS e JavaScript puros — sem frameworks ou bibliotecas externas |

---

## 🖥️ Demo

🔗 **[https://inaciooow.github.io/receituario-digital-ubs/](https://inaciooow.github.io/receituario-digital/)**

---

## 🗂️ Estrutura do projeto

```
receituario-digital/
├── index.html              # Estrutura principal — HTML semântico e acessível
├── css/
│   └── style.css           # Design system com variáveis CSS e BEM parcial
├── js/
│   └── app.js              # Lógica da aplicação — ES6+, funções documentadas
├── assets/
│   ├── logo-prefeitura.png # Logo da Prefeitura de Rio do Pires
│   └── logo-sus.png        # Logo do SUS
└── README.md
```

---

## 🛠️ Tecnologias

**HTML5 semântico** — uso de `<header>`, `<aside>`, `<main>`, `<article>`, `<section>` e `<footer>`, com atributos `aria-label` e `role` para acessibilidade.

**CSS3** — variáveis CSS para design system centralizado, layout com CSS Grid, classes no padrão BEM parcial e `@media print` dedicado com `@page { margin: 0 }` para impressão sem cabeçalhos do navegador.

**JavaScript ES6+** — `const`/`let`, funções com responsabilidade única, comentários JSDoc e manipulação de DOM sem jQuery ou qualquer biblioteca.

---

## 🎨 Decisões técnicas

- **Sem frameworks** — o projeto é simples o suficiente para não justificar React, Vue ou similares; manter em Vanilla JS garante leveza e longevidade
- **Estado em memória** — array `medIds` controla a ordem dos blocos de medicamento, permitindo renumeração correta após remoções
- **BEM parcial** — classes como `.receipt-section__title` e `.btn--primary` facilitam a leitura sem a rigidez total do BEM
- **Impressão via CSS** — toda a lógica de impressão é resolvida em CSS, sem bibliotecas de PDF ou janelas especiais

---

## 📋 Contexto real

Projeto desenvolvido para uso real na UBS Família da Placa e Hospital Municipal de Rio do Pires, atendendo uma demanda concreta da equipe de saúde do município de Rio do Pires, BA. A solução foi desenhada para rodar em qualquer computador da unidade, sem instalação, servidor ou configuração — basta abrir o link.

---

## 👨‍💻 Autor

**Jorge Inácio**  
Engenheiro de Computação  
[![GitHub](https://img.shields.io/badge/GitHub-inaciooow-181717?style=flat&logo=github)](https://github.com/inaciooow)
