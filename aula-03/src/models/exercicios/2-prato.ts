export class Pedido {
	public pratoNome: string = "";
	public pratoPreco: number = 0;
	public garcomNome: string = "";
	public garcomMatricula: number = 0;
	public mesa: number = 0;
	public quantidade: number = 0;

	definirPrato(): void {
		if (!this.pratoNome && !this.pratoPreco) {
			console.log("Você precisa informar o nome do prato e o seu preço.");
		} else {
			console.log(
				`Nome do prato: ${this.pratoNome}, Preço: R$${this.pratoPreco
					.toFixed(2)
					.replace(".", ",")}.`
			);
		}
	}

	definirGarcom(): void {
		if (!this.garcomNome && !this.garcomMatricula) {
			console.log("Você precisa informar o nome do garçom e a seu matrícula.");
		} else {
			console.log(
				`Nome do garçom: ${this.garcomNome}, Matrícula: ${this.garcomMatricula}.`
			);
		}
	}

	definirDetalhesPedido(): void {
		if (!this.mesa && !this.quantidade) {
			console.log(
				"Você precisa informar o número da mesa e a quantidade de pratos."
			);
		} else {
			console.log(
				`Número da mesa: ${this.mesa}, Quantidade de pratos: ${this.quantidade}.`
			);
		}
	}

	exibirPedido(): void {
		const total = this.pratoPreco * this.quantidade;
		console.log(`
Detalhes do pedido:
Prato: ${this.pratoNome}
Preço: R$${this.pratoPreco.toFixed(2).replace(".", ",")}
Quantidade de pratos: ${this.quantidade}
Nome do garçom: ${this.garcomNome} (Matrícula: ${this.garcomMatricula})
Número da mesa: ${this.mesa}
Valor total do pedido: R$${total.toFixed(2)}
		`);
	}
}
