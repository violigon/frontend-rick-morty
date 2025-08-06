# Rick&Morty Front-end

Este é o aplicativo front-end em React para o projeto **Rick&Morty**, construído para fins de ensino em aulas de Desenvolvimento Web. Ele consome a API do backend para listar, pesquisar, visualizar, criar, editar e remover personagens.

## Funcionalidades

* Listagem de personagens em cards responsivos
* Busca por nome (fuzzy search)
* Visualização de detalhes de cada personagem
* Criação de novos personagens
* Edição de personagens existentes
* Remoção de personagens
* Lazy loading de imagens com placeholder durante o carregamento

## Tecnologias

* React
* React Router
* CSS (modular por componente)
* Fetch API (via utilitário `Api` em `src/api/api.js`)

## Instalação e execução

1. Clone este repositório:

   ```bash
   git clone <URL_DO_REPO_FRONT>
   cd nome-do-repo-front
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz com a variável de ambiente:

   ```env
   REACT_APP_API_URL=http://localhost:3001
   ```
4. Inicie a aplicação em modo de desenvolvimento:

   ```bash
   npm start
   ```
5. Acesse `http://localhost:3000` no navegador.

## Estrutura de pastas

```plaintext
public/
├── assets/         # Imagens e outros recursos estáticos (logo, gifs)
├── favicon.ico     # Ícone da aba
├── index.html      # Template HTML principal
├── logo192.png     # Logo para PWA
├── logo512.png     # Logo para PWA
├── manifest.json   # Configurações de Progressive Web App
└── robots.txt      # Instruções para robôs de busca

src/
├── api/            # Cliente HTTP para a API (Api.js)
├── components/     # Componentes React reutilizáveis (ItemCard, forms, etc.)
├── structure/      # Layout geral (Header, Footer, App)
├── styles/         # Estilos globais (index.css, temas)
├── index.js        # Ponto de entrada React
└── index.css       # Estilos base da aplicação
```

```
src/
├── api/            # Cliente HTTP para a API
├── components/     # Componentes React (ItemCard, forms, etc.)
├── structure/      # Header, Footer e App
└── index.js        # Ponto de entrada
```

## Como usar

* Utilize a barra de pesquisa no topo para filtrar personagens pelo nome.
* Clique em um card para ver detalhes e ter as opções de editar ou remover.
* Use o botão **Adicionar** para criar um novo personagem.

---

Esse projeto faz parte de um material didático para aulas de Desenvolvimento Web, mostrando conceitos de React, gerenciamento de estado, roteamento e consumo de APIs REST.
