"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
class Biblioteca {
    constructor() {
        this.titulo = "";
        this.autor = "";
        this.categoria = "";
        this.numeroPaginas = 0;
        this.disponivel = false;
        this.ativo = false;
    }
    exibirDetalhes() {
        console.log(`
    Título: ${this.titulo ? `${this.titulo}` : `não informado`}
    Autor(a): ${this.autor ? `${this.autor}` : `não informado(a)`}
    Categoria: ${this.categoria ? `${this.categoria}` : `não informada`}
    Número de páginas: ${this.numeroPaginas ? `${this.numeroPaginas}` : `não informado`}
    Disponível: ${this.disponivel ? "Sim" : "Não"}
    Ativo: ${this.ativo ? "Sim" : "Não"}
    `);
    }
    emprestaLivro() {
        if (this.ativo && this.disponivel) {
            console.log(`Livro emprestado!`);
            this.disponivel = false;
        }
        else {
            console.log(`Livro inativo ou não disponível.`);
        }
    }
    consultaDisponibilidade() {
        console.log(`Disponibilidade do livro: ${this.disponivel ? "Disponível" : "Não disponível"}`);
    }
    removerLivro() {
        if (this.ativo) {
            this.ativo = false;
            console.log(`Livro removido da biblioteca.`);
        }
        else {
            console.log(`Livro já foi removido.`);
        }
    }
    renovarEmprestimo() {
        if (!this.disponivel) {
            console.log(`O empréstimo do livro foi renovado.`);
        }
        else {
            console.log(`O livro não foi emprestado.`);
        }
    }
}
exports.Biblioteca = Biblioteca;
