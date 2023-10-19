# Drex-Real-Digital
Criação de contrato digital em Solidity para criar a moeda Drex mais conhecida como Real Digital, esse código permite emitir um token já para uma conta em uma rede Besu de forma facilitada por meio de um comando npm.

## Requisitos:
- NodeJS
- NPM
- API RPC HTTP de rede Besu

## Como usar?
- Se for sua primeira vez clone esse repo em sua maquina, e digite `npm install` na pasta raiz do projeto para instalar as depencias.
- Após isso copie o arquivo `EXEMPLO.env` e renomeie para `.env` configure as variaveis de ambiente de acordo com seu servidor Besu passando a url da API RPC HTTP e tambem o CHAIN_ID.
- Agora pasta utilizar os comandos disponiveis a abaixo para fazer as ações que podem ser feitas com essa moeda.

## Comandos de ações disponiveis:
- Emitir um token para sua conta use: `npm run gerarToken`.
