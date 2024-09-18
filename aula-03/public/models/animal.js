"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor() {
        this.nome = "";
        this.especie = "";
        this.som = "";
    }
    emitirSom() {
        if (this.nome && this.especie && this.som) {
            console.log(`O animal ${this.nome}, tem especie ${this.especie} e faz ${this.som}`);
        }
        else {
            console.log("Infomações do animal incompletas");
        }
    }
}
exports.Animal = Animal;
