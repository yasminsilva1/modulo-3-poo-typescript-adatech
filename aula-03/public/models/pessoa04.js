"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor() {
        this.nome = "";
        this.idade = 0;
        this.estaVivo = true; // valor padrão
    }
    nascer() {
        if (!this.estaVivo) {
            console.log(`${this.nome} nasceu!`);
            this.estaVivo = true;
        }
        else {
            console.log(`${this.nome} já nasceu!`);
        }
    }
    crescer() {
        if (this.estaVivo) {
            this.idade++;
            console.log(`${this.nome} fez ${this.idade} ano(s).`);
        }
        else {
            console.log(`${this.nome} não pode crescer, pois faleceu.`);
        }
    }
    morrer() {
        if (this.estaVivo) {
            this.estaVivo = false;
            console.log(`${this.nome} morreu!`);
        }
        else {
            console.log(`${this.nome} já faleceu!`);
        }
    }
}
exports.Pessoa = Pessoa;
