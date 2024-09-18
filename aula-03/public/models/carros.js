"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carros = void 0;
class Carros {
    constructor() {
        this.marca = "";
        this.modelo = "";
    }
    ligar() {
        console.log("O carro está ligado");
    }
    desligar() {
        console.log("O carro está deligado");
    }
    acelerar() {
        console.log("O carro está acelerando");
    }
}
exports.Carros = Carros;
