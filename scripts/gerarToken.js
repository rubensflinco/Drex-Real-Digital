// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const prompts = require("prompts");

async function main() {
  const nome = "Drex - Real Digital";
  const symbol = "DREX";
  const resPrompts = await prompts([
    {
      type: "text",
      name: "account",
      message: "Informe a chave privada da conta que deseja receber o token:",
    },
    {
      type: "number",
      name: "value",
      message: `Quantos $${symbol} você deseja emitir nesse token?`
    },
  ]);
  hre.network.config.accounts = [`0x${resPrompts.account}`];

  if (!hre.network.config.accounts) {
    throw new Error("Conta digitada inválida");
  }

  const deployer = await hre.ethers.provider.getSigner();


  console.log(``);
  console.log(`Conta que o token será emitido (Contrato deploy na conta):`);
  console.log(deployer.address);
  console.log(``);

  const REALDIGITAL = await hre.ethers.deployContract("RealDigital", [nome, symbol, resPrompts.value, deployer]);
  await REALDIGITAL.waitForDeployment();

  console.log(``);
  console.log(`Token gerado com o valor de $${symbol} ${String(Number(resPrompts.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).replace("R$", "")}`);
  console.log(`Faça a importação do token em sua conta na carteira usando esse endereço:`);
  console.log(`${REALDIGITAL.target}`);
  console.log(``);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(``);
  console.error(error);
  console.error(``);
  process.exitCode = 1;
});
