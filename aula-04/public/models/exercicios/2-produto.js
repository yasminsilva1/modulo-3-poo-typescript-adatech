"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nome, preco, quantidadeInicial) {
        this._nome = "";
        this._preco = 0;
        this._quantidade = 0;
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidadeInicial;
    }
    reporEstoque(quantidade) {
        if (quantidade === 0) {
            console.log("Nenhum produto foi reposto no estoque.");
        }
        else if (quantidade < 0) {
            console.log("Valores menores que 0 não são válidos.");
        }
        else {
            this._quantidade += quantidade;
            console.log(`Estoque reposto! Total em estoque: ${this._quantidade}.`);
        }
    }
    baixarEstoque(quantidade) {
        if (!this._quantidade) {
            console.log("Estoque vazio.");
        }
        else if (quantidade === 0 || quantidade < 0) {
            console.log("Valor inválido ou nenhum produto baixado do estoque.");
        }
        else if (quantidade > this._quantidade) {
            console.log(`Erro: número de baixas acima da quantidade total do estoque. Total em estoque: ${this._quantidade}.`);
        }
        else if (this._quantidade === quantidade) {
            this._quantidade -= quantidade;
            console.log("Todos os produtos do estoque foram baixados. Estoque vazio.");
        }
        else {
            this._quantidade -= quantidade;
            console.log(`Baixado do estoque: ${quantidade} produto(s). Total em estoque: ${this._quantidade}.`);
        }
    }
    calcularValorTotal() {
        return this._quantidade * this._preco;
    }
    exibirResumo() {
        console.log(`
Nome do produto: ${this._nome}
Preço unitário do produto: R$${this._preco.toFixed(2).replace(".", ",")}
Quantidade no estoque: ${this._quantidade}
Valor total: ${this.calcularValorTotal().toFixed(2).replace(".", ",")}
      `);
    }
}
exports.Produto = Produto;
