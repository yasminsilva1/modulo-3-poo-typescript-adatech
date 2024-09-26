import { IPropriedadesProduto } from "../../types/carrinhoDeCompras/IPropriedadesProduto";
import { Produto } from "./produto";

export class ItemCarrinho {
	produto: Produto;
	quantidade: number = 0;

	constructor(produto: IPropriedadesProduto, quantidade: number) {
		this.produto = new Produto(produto.nome, produto.preco);
		this.quantidade = quantidade;
	}

	calcularSubtotal(): number {
		return this.produto.preco * this.quantidade;
	}
}
