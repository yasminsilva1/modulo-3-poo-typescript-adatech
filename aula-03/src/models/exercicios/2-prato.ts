/* 2) Criar uma classe pedido com as seguintes informações:
Atributos Públicos:
+ pratoNome: Nome do prato.
+ pratoPreco: Preço do prato.
+ garcomNome: Nome do garçom.
+ garcomMatricula: Matrícula do garçom.
+ mesa: Número da mesa onde o pedido foi feito.
+ quantidade: Quantidade de pratos pedidos.

Métodos:
definirPrato: Define o nome e o preço do prato.
definirGarcom: Define o nome e a matrícula do garçom.
definirDetalhesPedido: Define o número da mesa e a quantidade de pratos.
exibirPedido: Exibe todos os detalhes do pedido, incluindo o total calculado.
*/

export class Prato {
	public pratoNome: string = "";
	public pratoPreco: number = 0;
	public garcomNome: string = "";
	public garcomMatricula: number = 0;
	public mesa: number = 0;
	public quantidade: number = 0;

	definirPrato(pratoNome: string, pratoPreco: number): void {
		this.pratoNome = pratoNome;
		this.pratoPreco = pratoPreco;
	}

	definirGarcom(garcomNome: string, garcomMatricula: number): void {
		this.garcomNome = garcomNome;
		this.garcomMatricula = garcomMatricula;
	}

	definirDetalhesPedido(mesa: number, quantidade: number): void {
		this.mesa = mesa;
		this.quantidade = quantidade;
	}

	exibirPedido(): void {
		const total = this.pratoPreco * this.quantidade;
		console.log(`
Detalhes do pedido:
Prato: ${this.pratoNome}
Preço: R$${this.pratoPreco.toFixed(2)}
Quantidade: ${this.quantidade}
Garçom: ${this.garcomNome} (Matrícula: ${this.garcomMatricula})
Mesa: ${this.mesa}
Total do pedido: R$${total.toFixed(2)}
		`);
	}
}
