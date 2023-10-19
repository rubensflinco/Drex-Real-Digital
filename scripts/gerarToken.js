const hre = require("hardhat");
const prompts = require("prompts");
const loading = require("loading-cli");
const load = loading("Carregando...");
require("dotenv").config();

async function main() {
  const conf = await import("conf");
  const config = new conf.default({ projectName: "drex-real-digital" });
  const moedaNome = process.env.MOEDA_NOME;
  const moedaSimbolo = process.env.MOEDA_SIMBOLO;
  const resPrompts = await prompts([
    {
      type: "text",
      name: "account",
      message: "Informe a chave privada da conta que deseja emitir o token:",
    },
    {
      type: "number",
      name: "amount",
      message: `Quantos $${moedaSimbolo} você deseja emitir nesse token?`,
    },
  ]);
  if (!resPrompts.account) {
    throw new Error("Conta é um campo obrigatório!");
  }
  if (!resPrompts.amount) {
    throw new Error("O valor é um campo obrigatório!");
  }

  load.start();
  config.clear();
  config.set("chavePrivadaConta", resPrompts.account);
  hre.network.config.accounts = [`0x${resPrompts.account}`];
  const deployer = await hre.ethers.provider.getSigner();

  load.stop();
  console.log(``);
  console.log(`Conta que o token será emitido:`);
  console.log(deployer.address);
  console.log(``);


  load.start();
  const contratoFactory = await hre.ethers.getContractFactory("RealDigital");
  const contrato = await contratoFactory.deploy(moedaNome, moedaSimbolo, resPrompts.amount, deployer);
  // const resEmissao = await hre.ethers.deployContract("RealDigital", [moedaNome, moedaSimbolo, resPrompts.amount, deployer]);
  // await resEmissao.waitForDeployment();
  // await resEmissao.deployed();
  console.log(contrato);
  console.log(await contrato.getAddress());
  config.set("contratoEndereco", await contrato.getAddress());

  load.stop();
  console.log(``);
  console.log(`Token gerado com o valor de $${moedaSimbolo} ${String(Number(resPrompts.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })).replace("R$", "")}`);
  console.log(`Faça a importação do token em sua conta na carteira usando esse endereço:`);
  console.log(`${contrato.target}`);
  console.log(``);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  load.stop();
  console.error(``);
  console.error(error);
  console.error(``);
  process.exitCode = 1;
  process.exit();
  return;
});
