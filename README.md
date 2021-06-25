<h1 align="center">Valoriza</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

  <img src="https://img.shields.io/static/v1?label=NLW&message=Together&color=8257E5&labelColor=000000" alt="NLW Together" />
</p>

<p align="center">
  <img alt="Preview" src="./.github/preview.png">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Yup](https://www.npmjs.com/package/yup)
- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br)
- [Typeorm](https://typeorm.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Typescript](https://www.typescriptlang.org/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)
- [compression](https://www.npmjs.com/package/compression)
- [cors](https://www.npmjs.com/package/cors)
- [helmet](https://www.npmjs.com/package/helmet)

## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## 🚀 Como executar

- Clone o repositório;
- Rode `yarn` para baixar as dependências;
- Copie o arquivo `.env.example` para o arquivo `.env` e preencha de forma adequada;
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados;
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`

## 🚧 Como compilar

- Rode `yarn build` para compilar;
- Rode `yarn start` para rodar o projeto.

---

## ✈️ Milha extra

Seguindo as sugestões da última aula do nlw e algumas outras funcionalidades e bibliotecas:

- Classe de erros customizado onde pode-se passar uma mensagem de erro e um status code;
- Middleware que trata diversos tipos de erro
  - CustomException
  - ValidationError
  - SyntaxError
  - JsonWebTokenError
  - QueryFailedError
  - EntityColumnNotFound
- Utilização de variáveis de ambiente na configuração do typeorm, na configuração do jwt e a porta da aplicação
- Validação das variáveis de ambiente, caso elas estejam erradas a aplicação não roda e informa os erros
- Validação com a biblioteca yup em todas as rotas
- Eslint, prettier e editorconfig
- Log das rotas com a biblioteca [morgan](https://www.npmjs.com/package/morgan)
- Rotas de extra de get, put e dele de entidades
- Bibliotecas que otimizam a api compression, cors, helmet

---

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

