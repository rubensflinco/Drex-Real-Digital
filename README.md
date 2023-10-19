# Drex-Real-Digital
Criação de contrato digital em Solidity para criar a moeda Drex, mais conhecida como Real Digital. Este código permite emitir um token diretamente para uma conta em uma rede Besu de forma facilitada por meio de um comando npm.

## Requisitos:
- NodeJS
- NPM
- Rede Besu
- RPC_HTTP ativado na Rede Besu

## Como usar?
- Se for a sua primeira vez, clone este repositório em sua máquina e digite `npm install` na pasta raiz do projeto para instalar as dependências.
- Em seguida, copie o arquivo `EXEMPLO.env` e renomeie para `.env` Configure as variáveis de ambiente de acordo com o seu servidor Besu, inserindo a URL da RPC_HTTP_URL e o CHAIN_ID.
- Agora, basta utilizar os comandos disponíveis abaixo para realizar as ações relacionadas a esta moeda.

## Comandos de ações disponíveis:
- Criar a moeda e emitir valor inicial em uma conta: `npm run gerarToken`.
- Transferir valores entre uma conta a outra: `npm run transferir`.

## Demonstração do funcionamento:
![](https://i.imgur.com/snWtrJJ.png)

![](https://i.imgur.com/7pEh1en.png)

![](https://i.imgur.com/awqmvO1.png)

![](https://i.imgur.com/wNGODrw.png)