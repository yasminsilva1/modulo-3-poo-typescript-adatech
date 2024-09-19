"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carros = void 0;
class Carros {
    constructor(marca) {
        this._marca = "";
        this._modelo = "";
        this._marca = marca;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    get modelo() {
        return this.modelo;
    }
    ligar() {
        console.log(`O carro da marca ${this._marca} e modelo ${this._modelo} esta ligado`);
    }
    desligar() {
        console.log("O carro esta desligado");
    }
    acelerar() {
        console.log("O carro esta acelerando");
    }
}
exports.Carros = Carros;
