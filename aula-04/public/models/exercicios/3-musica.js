"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Musica = void 0;
class Musica {
    constructor(titulo, artista, duracao) {
        this._titulo = "";
        this._artista = "";
        this._duracao = 0;
        this._titulo = titulo;
        this._artista = artista;
        this._duracao = duracao;
    }
    reproduzir() {
        console.log(`Reproduzindo "${this._titulo}" - ${this._artista}.`);
    }
    pausar() {
        console.log(`"${this._titulo}" foi pausada.`);
    }
    obterDuracaoEmMinutos() {
        let minutos = Math.floor(this._duracao / 60);
        let segundos = this._duracao % 60;
        let segundosFormatado = segundos < 10 ? `0${segundos}` : segundos;
        return `A música "${this._titulo}" - ${this._artista} tem ${minutos}:${segundosFormatado}min de duração.`;
    }
}
exports.Musica = Musica;
