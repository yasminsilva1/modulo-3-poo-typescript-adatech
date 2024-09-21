import { Carros } from "./carros";

export class CarroEletrico extends Carros {
	private _autonomiaBateria: number = 0;

	constructor(
		marca: string,
		modelo: string,
		autonomiaBateria: number,
		potencia: number
	) {
		super(marca, modelo, potencia);
		this._autonomiaBateria = autonomiaBateria;
	}

	carregaBateria(): void {
		console.log(
			`Carregando a bateria do ${this._marca} modelo ${this._modelo}`
		);
	}
}
