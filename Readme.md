<p align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/server.svg" alt="Node.js com Docker e PostgreSQL" width="100" height="100"/>
</p>

<h1 align="center">API Node.js com Docker e PostgreSQL</h1>

<p align="center">
  <strong>Uma API RESTful escalável utilizando Node.js, Express e PostgreSQL, containerizada com Docker.</strong>
</p>

<p align="center">
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#como-usar">Como Usar</a> •
  <a href="#instalacao">Instalação</a> •
  <a href="#estrutura">Estrutura</a> •
  <a href="#licenca">Licença</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.16.1-green?logo=node.js" alt="Node.js"/>
  <img src="https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql" alt="PostgreSQL"/>
  <img src="https://img.shields.io/badge/Docker-20.10-blue?logo=docker" alt="Docker"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-success" alt="Version"/>
</p>



---

## ⚙️ Funcionalidades

- **CRUD de Usuários**: Criar, ler, atualizar e deletar usuários.
- **Banco de Dados PostgreSQL**: Uso do Sequelize como ORM.
- **Containerização**: Configuração com Docker e Docker Compose.
- **Roteamento com Express**: Estrutura modular e escalável.
- **Variáveis de Ambiente**: Configuração via `.env`.

---

## 🚀 Tecnologias

Este projeto utiliza as seguintes tecnologias:

- [Node.js](https://nodejs.org/) - Plataforma JavaScript para backend.
- [Express](https://expressjs.com/) - Framework web para Node.js.
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional.
- [Sequelize](https://sequelize.org/) - ORM para PostgreSQL.
- [Docker](https://www.docker.com/) - Containerização.
- [Postman](https://www.postman.com/) - Teste da API.

---

## 🛠️ Como Usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Crie um arquivo `.env` e configure:

```env
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=meubanco
DB_HOST=meu-banco
PORT=3000
```

3. Execute com Docker Compose:

```bash
docker-compose up --build
```

A API estará disponível em `http://localhost:3000`.

---

![image](https://github.com/user-attachments/assets/a928a5b5-7a8e-40e6-be1b-c56630de6e16)

## 📂 Estrutura

```
/src
  /controllers
    userController.js
  /models
    User.js
    index.js
  /routes
    userRoutes.js
  /config
    database.js
server.js
Dockerfile
docker-compose.yml
package.json
.env
```
![image](https://github.com/user-attachments/assets/8b075691-4301-4e23-8621-d70d5da10594)

---

## 📝 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Desenvolvido por Thomas Eduardo
</p>
