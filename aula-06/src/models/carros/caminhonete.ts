import { IPropriedadesVeiculo } from "../../types/carros/IPropriedadesVeiculo";
import { Carros } from "./carros";

export class Caminhonete extends Carros {
	private _capacidadeDeCarga: number = 0;

	constructor(propriedades: IPropriedadesVeiculo, capacidadeDeCarga: number) {
		super(propriedades);
		this._capacidadeDeCarga = capacidadeDeCarga;
	}

	// sobrepõe o método da classe pai
	// ligar(): void {
	// 	console.log(
	// 		`A caminhonete da marca ${this._marca} e modelo ${this._modelo} está ligado.`
	// 	);
	// }

	transportarDeCarga(): void {
		console.log(
			`A caminhonete da marca ${this._marca} e modelo ${this._modelo} está pronta para o transporte!`
		);
	}
}
