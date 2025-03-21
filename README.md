# POC sobre upload de arquivos usando Nodejs, Nestjs, NestFastifyApplication

Artigo de referência: https://medium.com/@hackntosh/how-to-handle-file-uploading-with-nestjs-fastify-swagger-81afb08767ce

## Dependências e libraries externas
- @nestjs/platform-fastify
- @nest-lab/fastify-multer

```
npm i --save @nestjs/platform-fastify @fastify/static @fastify/multipart
```

```
npm i --save @nestjs/swagger
```

```
npm i @nest-lab/fastify-multer
```

## Como executar

```
yarn install
yarn build
yarn start
```

Acesse ao endereço http://localhost:3000/api e utilize o Swagger para fazer o teste de upload