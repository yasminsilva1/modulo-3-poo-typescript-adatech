export class Carros {
	public marca: string = "";
	public modelo: string = "";

	ligar(): void {
		console.log("O carro está ligado");
	}

	desligar(): void {
		console.log("O carro está deligado");
	}

	acelerar(): void {
		console.log("O carro está acelerando");
	}
}
