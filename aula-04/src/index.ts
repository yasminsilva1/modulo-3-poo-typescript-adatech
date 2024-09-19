import { Carros } from "./models/carros";
import { Conta_Bancaria } from "./models/exercicios/1-contaBancaria";
import { Produto } from "./models/exercicios/2-produto";
import { Musica } from "./models/exercicios/3-musica";
import { Pessoa } from "./models/pessoa";

const pessoa1 = new Pessoa("Yasmin", 21);
pessoa1.estaVivo = true;
pessoa1.setTelefone = "5551999999999";
pessoa1.nascer();
pessoa1.crescer();
pessoa1.morrer();

const meuCarro = new Carros("GM");
meuCarro.modelo = "Corsa";
meuCarro.ligar();

const conta1 = new Conta_Bancaria("ax1234");
conta1.saldo = 5000;
console.log(conta1.obterNumeroConta());
console.log(conta1.consultarSaldo());
conta1.sacar(6000);
conta1.depositar(500);
console.log(conta1.consultarSaldo());
conta1.sacar(2000);
console.log(conta1.consultarSaldo());
conta1.depositar(-10);
conta1.sacar(0);
conta1.depositar(1000);
console.log(conta1.consultarSaldo());

const produto1 = new Produto("Mouse", 180, 10);
produto1.exibirResumo();
produto1.baixarEstoque(2);
produto1.baixarEstoque(10);
produto1.baixarEstoque(-2);
produto1.baixarEstoque(8);
produto1.reporEstoque(58);
produto1.reporEstoque(0);
produto1.reporEstoque(-5);
console.log(produto1.calcularValorTotal());
produto1.exibirResumo();

const musica1 = new Musica("Burning Down The House", "Paramore", 218);

musica1.pausar();
console.log(musica1.obterDuracaoEmMinutos());
