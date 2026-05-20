# 🩺 Receituário Digital — UBS Família da Placa

Ferramenta web para preenchimento e impressão de receituários médicos da **Unidade Básica de Saúde da Família da Placa**, em Rio do Pires / BA.

Desenvolvida para substituir o processo manual de preenchimento em PDF, permitindo que a médica preencha os dados diretamente no navegador e imprima com um clique — gerando automaticamente as **duas vias** do receituário em uma única folha A4.

🔗 **[Acessar a ferramenta online](https://seu-usuario.github.io/receituario-ubs)**

---

## ✨ Funcionalidades

- **Pré-visualização em tempo real** — o receituário é atualizado instantaneamente conforme o preenchimento
- **Duas vias simultâneas** — imprime as duas cópias lado a lado em uma única página A4
- **Data automática** — preenchida com a data de hoje, editável quando necessário
- **Formato de data por extenso** — exibe no padrão *Rio do Pires, 5 de maio de 2026*
- **Blocos de medicamentos dinâmicos** — adicione ou remova quantos quiser, com renumeração automática
- **Contador de caracteres** — alerta visual quando o texto se aproxima do limite do balão
- **Impressão limpa** — oculta a interface e imprime apenas o receituário, sem cabeçalhos do navegador
- **Zero dependências** — HTML, CSS e JavaScript puros, sem frameworks ou bibliotecas externas

---

## 🗂️ Estrutura do projeto

```
receituario-ubs/
├── index.html              # Estrutura principal (HTML semântico + acessível)
├── css/
│   └── style.css           # Estilos organizados com variáveis CSS
├── js/
│   └── app.js              # Lógica da aplicação (ES6+, comentado)
├── assets/
│   ├── logo-prefeitura.png # Logo da Prefeitura de Rio do Pires
│   └── logo-sus.png        # Logo do SUS
└── README.md
```

---

## 🚀 Como publicar no GitHub (passo a passo)

### 1. Criar o repositório

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **New repository** (botão verde no canto superior direito)
3. Dê o nome `receituario-ubs`
4. Deixe como **Public**
5. Clique em **Create repository**

### 2. Subir os arquivos

Na página do repositório recém-criado, clique em **uploading an existing file** e arraste **os arquivos e pastas** extraídos do `.zip`:

```
index.html
README.md
css/          ← pasta inteira
js/           ← pasta inteira
assets/       ← pasta inteira
```

> ⚠️ **Não suba o arquivo `.zip`** — suba os arquivos e pastas soltos.

Clique em **Commit changes** para salvar.

### 3. Ativar o GitHub Pages

1. No repositório, clique em **Settings**
2. No menu lateral, clique em **Pages**
3. Em *Source*, selecione **Deploy from a branch**
4. Em *Branch*, selecione **main** e a pasta **/ (root)**
5. Clique em **Save**

Após 1 a 2 minutos, o site estará disponível em:

```
https://seu-usuario.github.io/receituario-ubs
```

> 💡 Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura e acessibilidade (`aria-label`, roles) |
| CSS3 com variáveis | Design system, layout Grid, responsividade e `@media print` |
| JavaScript ES6+ | Manipulação de DOM, estado da aplicação, formatação de dados |

---

## 🎨 Decisões de design

- **BEM (Block Element Modifier)** parcial nas classes CSS para legibilidade
- **Variáveis CSS** centralizando cores, tipografia e espaçamentos
- **`const`/`let`** e funções com responsabilidade única no JS
- **`aria-*` e roles semânticos** para acessibilidade básica
- **`@page { margin: 0 }`** para remover cabeçalhos/rodapés automáticos do navegador na impressão

---

## 📋 Contexto

Este projeto foi desenvolvido para uso real na UBS Família da Placa, atendendo uma demanda concreta da equipe de saúde do município de Rio do Pires, BA. O objetivo foi criar uma solução simples, leve e que funcione sem instalação — basta acessar o link.

---

## 👨‍💻 Autor

**Jorge Inácio**  
Engenheiro de Computação
