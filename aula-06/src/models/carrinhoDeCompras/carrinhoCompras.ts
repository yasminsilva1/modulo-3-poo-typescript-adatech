import { ItemCarrinho } from "./itemCarrinho";
import { Produto } from "./produto";

export class CarrinhoCompras {
	itens: ItemCarrinho[];

	constructor(itens: ItemCarrinho[]) {
		this.itens = itens;
	}

	adicionarItem(produto: Produto, quantidade: number): void {
		const itemExiste = this.itens.find(
			(item) => item.produto.nome === produto.nome
		);

		if (itemExiste) {
			itemExiste.quantidade++;
		} else {
			const novoItem = new ItemCarrinho(produto, quantidade);
			this.itens.push(novoItem);
			console.log(`\nNovo item "${novoItem.produto.nome}" adicionado!`);
		}
	}

	removerItem(produto: Produto): void {
		const itemExiste = this.itens.find(
			(item) => item.produto.nome === produto.nome
		);
		const index = this.itens.findIndex(
			(item) => item.produto.nome === produto.nome
		);

		if (itemExiste !== undefined) {
			if (itemExiste.quantidade > 1) {
				itemExiste.quantidade--;
				console.log(`Quantidade do produto "${itemExiste.produto.nome}" diminuida.`)
			} else {
				this.itens.splice(index, 1);
				console.log(`\nProduto "${itemExiste.produto.nome}" removido.`);
			}
		} else {
			console.log("\nProduto não encrontrado.");
		}
	}

	calcularTotal(): string {
		const total = this.itens.reduce(
			(total, item) => total + item.calcularSubtotal(),
			0
		);
		return `\nTotal: R$${total.toFixed(2).replace(".", ",")}`;
	}

	mostrarTodosItens(): void {
		if (this.itens.length < 1) {
			console.log("Carrinho de compras vazio!");
		} else {
			console.log(this.itens);
		}
	}
}
