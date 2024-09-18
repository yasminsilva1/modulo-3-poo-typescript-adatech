/* 1) Crie um sistema básico de biblioteca com atributos abaixo :
titulo, autor, categoria, numero de paginas, disponivel, ativo;
E tenha como comportamentos:
exibirDetalhes, emprestaLivro, consultaDisponibilidade, removerLivro, renovarEmprestimo
*/

export class Biblioteca {
	public titulo: string = "";
	public autor: string = "";
	public categoria: string = "";
	public numeroPaginas: number = 0;
	public disponivel: boolean = false;
	public ativo: boolean = false;

	exibirDetalhes(): void {
		console.log(`
    Título: ${this.titulo ? `${this.titulo}` : `não informado`}
    Autor(a): ${this.autor ? `${this.autor}` : `não informado(a)`}
    Categoria: ${this.categoria ? `${this.categoria}` : `não informada`}
    Número de páginas: ${this.numeroPaginas ? `${this.numeroPaginas}` : `não informado`}
    Disponível: ${this.disponivel ? "Sim" : "Não"}
    Ativo: ${this.ativo ? "Sim" : "Não"}
    `);
	}

	emprestaLivro(): void {
		if (this.ativo && this.disponivel) {
			console.log(`Livro emprestado!`);
			this.disponivel = false;
		} else {
			console.log(`Livro inativo ou não disponível.`);
		}
	}

	consultaDisponibilidade(): void {
		console.log(`Disponibilidade do livro: ${this.disponivel ? "Disponível" : "Não disponível"}`);
	}

	removerLivro(): void {
		if (this.ativo) {
			this.ativo = false;
			console.log(`Livro removido da biblioteca.`);
		} else {
			console.log(`Livro já foi removido.`);
		}
	}

	renovarEmprestimo(): void {
		if (!this.disponivel) {
			console.log(`O empréstimo do livro foi renovado.`);
    } else {
			console.log(`O livro não foi emprestado.`);
		}
	}
}
