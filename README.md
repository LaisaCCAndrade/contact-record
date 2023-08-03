<h1 align="center"> 🏆 T15 - 🏁 Desafio Fullstack - M6 </h1>

# My Contacts 🚀 

## Funcionalidades

- Listar todos os contatos cadastrados
- Visualizar detalhes de um contato específico
- Editar os detalhes de um contato
- Excluir um contato
- Autenticação de usuário (login e registro)
- Criar, Ler, Atualizar e Excluir (CRUD) contatos

## Tecnologias Utilizadas

- Front-end:
  - React
  - Material-UI
  - Axios
  - JSON Web Tokens (JWT)

- Back-end:
  - Node.js
  - Express.js

## Endpoints da API

## Usuários
- Criar Usuário
    - Método: POST
    - Rota: /users
    - Descrição: Cria um novo usuário com os dados fornecidos.

- Listar Usuários
    - Método: GET
    - Rota: /users
    - Descrição: Retorna uma lista de todos os usuários registrados.

- Listar Usuário por ID
    - Método: GET
    - Rota: /users/profile/:id
    - Descrição: Retorna os detalhes de um usuário específico com base em seu ID.

- Atualizar Usuário
    - Método: PATCH
    - Rota: /users/:id
    - Descrição: Atualiza os dados de um usuário existente com base em seu ID.

- Deletar Usuário
    - Método: DELETE
    - Rota: /users/:id
    - Descrição: Deleta um usuário existente com base em seu ID.

- Autenticação
    - Criar Token de Acesso (Login)
    - Método: POST
    - Rota: /login
    - Descrição: Cria um token de acesso para um usuário com base em suas credenciais de login.

## Contatos
- Criar Contato
    - Método: POST
    - Rota: /contacts/:id
    - Descrição: Cria um novo contato para um usuário específico com base em seu ID.

- Listar Contatos de um Usuário
    - Método: GET
    - Rota: /contacts/:id
    - Descrição: Retorna uma lista de contatos pertencentes a um usuário específico com base em seu ID.

- Atualizar Contato
    - Método: PATCH
    - Rota: /contacts/:id
    - Descrição: Atualiza os dados de um contato existente com base em seu ID.

- Deletar Contato
    - Método: DELETE
    - Rota: /contacts/:id
    - Descrição: Deleta um contato existente com base em seu ID.

## Exemplo do corpo da requisição

- Request (application/json)
    - Headers
      
      ```bash
        Authorization: Bearer [access_token]
      ```
    - Body
      
      ```bash
        {
            "name": "ExampleName",
        }
      ```
- Response 200 (application/json)
    - Body
      
      ```bash
        {
            "id": "tokengerado",
            "name":"ExampleName",
            "email": "example@mail.com",
            "phone": 1158874559,
            "creates_at": "2023-08-05T05:21:11.980Z"
        }
      ```

## Instalação

1. Clone o repositório: 
```bash
git clone https://github.com/LaisaCCAndrade/contact-record
```

2. Instale as dependências:
```bash
npm install
``` 

3. Gere as migrations:
```bash
npm run typeorm migration:generate -- -d ./src/data-souce ./src/migrations/CreateTable
```

4. Rode as migrations:
```bash
npm run typeorm migration:run -- -d ./src/data-source
```

5. Inicie o servidor:
```bash
npm run dev
```

6. Abra a aplicação no navegador:
```bash
http://localhost:3001
```

## Observação
- Não se esqueça de rodar o backend e depois o frontend

## 🤝 Contribuição

- **Laisa Andrade** - [Github](https://github.com/LaisaCCAndrade)
