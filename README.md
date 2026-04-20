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
* Persistência de dados no navegador (localStorage)
* Filtros dinâmicos e busca em tempo real

---

## 🚀 Tecnologias Utilizadas

* React
* Vite
* JavaScript
* CSS Modules
* Fetch API
* Context API
* LocalStorage

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
  * Lista organizada de produtos
  * Imagens dos produtos
  * Controle de quantidade com botões

* Melhorias de UX:
  * Feedback visual ao adicionar produtos
  * Loading em ações assíncronas
  * Indicador de quantidade no carrinho na Navbar
  * Animações no contador do carrinho

---

### ✅ Sprint 4 — Organização, UX e Entrega Final

* Organização da arquitetura do projeto em pastas:
  * assets/
  * components/layout/products
  * context/
  * pages/

* Persistência de dados:
  * Carrinho salvo no localStorage
  * Dados mantidos mesmo após recarregar a página

* Busca dinâmica de produtos:
  * Busca por nome e categoria
  * Sincronização entre Navbar e busca mobile
  * Reset automático de filtros ao mudar categoria ou busca

* Melhorias de UX:
  * Interface responsiva e mais fluida
  * Filtros e busca mais intuitivos
  * Feedback visual aprimorado

---

## 📱 Interface e UX

* Layout responsivo (desktop e mobile)
* Grid de produtos adaptável
* Filtros e busca em tempo real
* Feedback visual nas ações do usuário
* Indicadores dinâmicos de estado (loading, carrinho, filtros)

---

## 🔌 API Utilizada

* GET /products  
* GET /products/:id  
* GET /products/categories  

📖 https://fakestoreapi.com

---

## 🚀 Como executar o projeto

```bash
npm install
npm run dev