"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor() {
        this.pratoNome = "";
        this.pratoPreco = 0;
        this.garcomNome = "";
        this.garcomMatricula = 0;
        this.mesa = 0;
        this.quantidade = 0;
    }
    definirPrato() {
        if (!this.pratoNome && !this.pratoPreco) {
            console.log("Você precisa informar o nome do prato e o seu preço.");
        }
        else {
            console.log(`Nome do prato: ${this.pratoNome}, Preço: R$${this.pratoPreco
                .toFixed(2)
                .replace(".", ",")}.`);
        }
    }
    definirGarcom() {
        if (!this.garcomNome && !this.garcomMatricula) {
            console.log("Você precisa informar o nome do garçom e a seu matrícula.");
        }
        else {
            console.log(`Nome do garçom: ${this.garcomNome}, Matrícula: ${this.garcomMatricula}.`);
        }
    }
    definirDetalhesPedido() {
        if (!this.mesa && !this.quantidade) {
            console.log("Você precisa informar o número da mesa e a quantidade de pratos.");
        }
        else {
            console.log(`Número da mesa: ${this.mesa}, Quantidade de pratos: ${this.quantidade}.`);
        }
    }
    exibirPedido() {
        const total = this.pratoPreco * this.quantidade;
        console.log(`
Detalhes do pedido:
Prato: ${this.pratoNome}
Preço: R$${this.pratoPreco.toFixed(2).replace(".", ",")}
Quantidade de pratos: ${this.quantidade}
Nome do garçom: ${this.garcomNome} (Matrícula: ${this.garcomMatricula})
Número da mesa: ${this.mesa}
Valor total do pedido: R$${total.toFixed(2)}
		`);
    }
}
exports.Pedido = Pedido;
