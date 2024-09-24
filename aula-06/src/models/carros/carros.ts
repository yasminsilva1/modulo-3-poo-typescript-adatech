import { IPropriedadesVeiculo } from "../../types/carros/IPropriedadesVeiculo";
import { IVeiculos } from "../../types/carros/IVeiculos";
import { Motor } from "./motor";

export class Carros implements IVeiculos {
	protected _marca: string = "";
	protected _modelo: string = "";
	private _motor: Motor;
	private static _totalDeCarrosCriados: number = 0;

	constructor(propriedades: IPropriedadesVeiculo) {
		this._marca = propriedades.marca;
		this._modelo = propriedades.modelo;
		this._motor = new Motor(propriedades.potenciaMotor);
		Carros._totalDeCarrosCriados++;
	}

	ligar(): void {
		console.log(
			`O carro da marca ${this._marca} e modelo ${this._modelo} está ligado.`
		);
		this._motor.ligar();
	}

	desligar(): void {
		console.log("O carro esta desligado.");
	}

	acelerar(): void {
		console.log("O carro esta acelerando.");
	}

	obterInformacoes(): string {
		return `Marca: ${this._marca}, Modelo: ${this._modelo}`;
	}

	static obterTotalCarrosCriados(): string {
		return `Total de carros criados: ${Carros._totalDeCarrosCriados}`;
	}
}
