# ENTITY-DEPENDENCIES-RESOLVER

**Streamlining Dependencies for Seamless Data Flow**

---

**Built with:** TypeScript · npm · ts-node

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Project structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

`entity-dependencies-resolver` é uma ferramenta desenvolvida para resolver e organizar dependências entre entidades, facilitando o fluxo de dados e operações em projetos TypeScript. O objetivo é fornecer uma base leve, testável e fácil de integrar em pipelines de ETL, sistemas de sincronização e microsserviços.

---

## Getting Started

### Prerequisites

Antes de começar, verifique se o seu ambiente possui:

- Node.js (versão 18+ recomendada)
- npm (ou outro gerenciador compatível)
- Git

### Installation

Clone o repositório:

```bash
git clone https://github.com/rafaelmfried/entity-dependencies-resolver
```

Navegue até a pasta do projeto:

```bash
cd entity-dependencies-resolver
```

Instale as dependências:

```bash
npm install
```

### Usage

Executar em modo de desenvolvimento (usando `ts-node`):

```bash
npm run start
```

(Se `npm start` estiver mapeado para `ts-node` ou script equivalente no `package.json`.)

### Testing

Este projeto utilizará **Jest** como framework de testes (configurável através do `package.json`). Execute a suíte de testes com:

```bash
npm run test
```

---

## Project structure

Estrutura típica (exemplo):

```
.
├── build-dag.ts
├── column.ts
├── dag
│   ├── dag.ts
│   ├── edge.ts
│   ├── node.ts
│   └── topological-sort.ts
├── entity.ts
├── example.ts
├── package-lock.json
├── package.json
├── resolve-entities-dependencies.ts
└── tsconfig.json
└─ README.md

2 directories, 12 files
```

---

## Conceitos utilizados no projeto

- **DAG**: https://www.datacamp.com/pt/blog/what-is-a-dag
- **ORDENAÇÃO TOPOLÓGICA**: https://www-geeksforgeeks-org.translate.goog/dsa/topological-sorting-indegree-based-solution/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc

---

## Contributing

Contribuições são bem-vindas. Siga estas etapas:

1. Fork o repositório.
2. Crie uma branch com a sua feature/bugfix: `git checkout -b feature/minha-feature`.
3. Faça commits claros e atômicos.
4. Abra um Pull Request descrevendo a mudança.

Adicione também testes quando aplicável e garanta que o CI passe.

---

## License

MIT

---

## Contact

Para dúvidas ou contribuições, abra uma issue no repositório ou entre em contato com o mantenedor.
