import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", "111222333-09");
const cliente2 = new Cliente("Alice", "888222333-09");

const conta1 = new ContaCorrente(0, cliente1, 1001);
const conta2 = new ContaCorrente(0, cliente2, 102);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

