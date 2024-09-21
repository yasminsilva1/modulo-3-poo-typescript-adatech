import { Carros } from "./carros";

export class Caminhonete extends Carros {
	private _capacidadeDeCarga: number = 0;

	constructor(
		marca: string,
		modelo: string,
		capacidadeDeCarga: number,
		potencia: number
	) {
		super(marca, modelo, potencia);
		this._capacidadeDeCarga = capacidadeDeCarga;
	}

	// sobrepõe o método da classe pai
	ligar(): void {
		console.log(
			`A caminhonete da marca ${this._marca} e modelo ${this._modelo} está ligado.`
		);
	}

	transportarDeCarga(): void {
		console.log(
			`A caminhonete da marca ${this._marca} e modelo ${this._modelo} está pronta para o transporte!`
		);
	}
}
