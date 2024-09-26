import { IPropriedadesProduto } from "../../types/carrinhoDeCompras/IPropriedadesProduto";

export class Produto implements IPropriedadesProduto{
	nome: string;
	preco: number;

	constructor(nome: string, preco: number) {
		this.nome = nome;
		this.preco = preco;
	}
}
