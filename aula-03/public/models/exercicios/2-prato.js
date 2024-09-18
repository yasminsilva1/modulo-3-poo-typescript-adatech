"use strict";
/* 2) Criar uma classe pedido com as seguintes informações:
Atributos Públicos:
+ pratoNome: Nome do prato.
+ pratoPreco: Preço do prato.
+ garcomNome: Nome do garçom.
+ garcomMatricula: Matrícula do garçom.
+ mesa: Número da mesa onde o pedido foi feito.
+ quantidade: Quantidade de pratos pedidos.

Métodos:
definirPrato: Define o nome e o preço do prato.
definirGarcom: Define o nome e a matrícula do garçom.
definirDetalhesPedido: Define o número da mesa e a quantidade de pratos.
exibirPedido: Exibe todos os detalhes do pedido, incluindo o total calculado.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prato = void 0;
class Prato {
    constructor() {
        this.pratoNome = "";
        this.pratoPreco = 0;
        this.garcomNome = "";
        this.garcomMatricula = 0;
        this.mesa = 0;
        this.quantidade = 0;
    }
    definirPrato(pratoNome, pratoPreco) {
        this.pratoNome = pratoNome;
        this.pratoPreco = pratoPreco;
    }
    definirGarcom(garcomNome, garcomMatricula) {
        this.garcomNome = garcomNome;
        this.garcomMatricula = garcomMatricula;
    }
    definirDetalhesPedido(mesa, quantidade) {
        this.mesa = mesa;
        this.quantidade = quantidade;
    }
    exibirPedido() {
        const total = this.pratoPreco * this.quantidade;
        console.log(`
Detalhes do pedido:
Prato: ${this.pratoNome}
Preço: R$${this.pratoPreco.toFixed(2)}
Quantidade: ${this.quantidade}
Garçom: ${this.garcomNome} (Matrícula: ${this.garcomMatricula})
Mesa: ${this.mesa}
Total do pedido: R$${total.toFixed(2)}
		`);
    }
}
exports.Prato = Prato;
