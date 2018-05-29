# Challenge
[![Build Status](https://travis-ci.org/Leocardoso94/challenge.svg?branch=master)](https://travis-ci.org/Leocardoso94/challenge)

Você pode ver o resultado final do desafio nesta url: https://getninjas-challenge.herokuapp.com/

## Setup
Instale as dependências do projeto usando:
```
yarn install 
// ou
npm install
```

## Rodando o projeto

```
npm start
```

Este comando irá gerar os arquivos dentro da pasta public e subir o servidor, agora basta acessar a url http://localhost:8080/

## Rodando os testes

Antes de rodar os testes é necessário que o tenha sido rodado o comando `npm run build` pois há um teste da parte de servidor que valida a requisição dos arquivos.

Para rodar os testes basta usar o comando:
```
npm run test
```