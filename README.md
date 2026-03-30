# 🛍️ DevShop - Desafio Frontend

Aplicação web de e-commerce desenvolvida com **React + Vite**, consumindo dados da Fake Store API.

---

## 📋 Sobre o Projeto

O DevShop é um catálogo de produtos que demonstra habilidades em:

* Consumo de APIs REST
* Gerenciamento de estado com React Hooks
* Roteamento com React Router
* Componentização
* Estilização responsiva

---

## 🚀 Tecnologias Utilizadas

* React
* Vite
* JavaScript
* CSS Modules
* Fetch API
* Context API

---

## 📦 Funcionalidades Implementadas

### ✅ Sprint 1 — Estrutura Base e Listagem

* Configuração do projeto com Vite
* Consumo da Fake Store API utilizando Fetch API
* Criação de Header com navegação
* Listagem de produtos em grid responsivo
* Componente de Card de Produto exibindo:

  * Imagem
  * Título
  * Preço em reais (R$)

---

### ✅ Sprint 2 — Detalhes e Categorias

* Página de detalhes do produto
* Exibição de:

  * Imagem
  * Título
  * Preço
  * Categoria
  * Descrição
* Navegação entre páginas com React Router
* Botão de voltar para a listagem de produtos
* Filtro de produtos por categoria
* Categorias exibidas com:

  * Imagens em formato circular
  * Destaque visual da categoria selecionada
* Atualização dinâmica dos produtos conforme a categoria selecionada

---

### ✅ Sprint 3 — Carrinho e Estado Global

* Implementação de estado global utilizando Context API
* Criação do carrinho de compras acessível em toda a aplicação

* Funcionalidades do carrinho:

  * Adicionar produtos ao carrinho
  * Incrementar quantidade de produtos já existentes
  * Remover produtos do carrinho
  * Limpar carrinho completamente
  * Atualização dinâmica da quantidade de itens

* Cálculo automático do valor total da compra

* Exibição de:

  * Preço unitário
  * Quantidade de itens
  * Valor total por produto
  * Valor total geral do carrinho

* Interface do carrinho com:

  * Layout responsivo (desktop e mobile)
  * Organização dos produtos em lista
  * Imagens dos produtos
  * Contador de quantidade com botões de incremento/decremento

* Melhorias de experiência do usuário (UX):

  * Feedback visual ao adicionar produtos (mensagem/toast)
  * Loading durante ações
  * Indicador de quantidade de itens no carrinho na Navbar
  * Animação no contador do carrinho

---

## 📱 Interface e UX

* Layout responsivo (desktop e mobile)
* Grid de produtos adaptável
* Efeitos visuais com hover e seleção
* Feedback visual nas ações do usuário
* Indicadores dinâmicos de estado (loading, quantidade de itens)

---

## 🔌 API Utilizada

* GET /products  
* GET /products/:id  
* GET /products/categories  

📖 Documentação: https://fakestoreapi.com

---

## 🚀 Como executar o projeto

```bash
npm install
npm run dev