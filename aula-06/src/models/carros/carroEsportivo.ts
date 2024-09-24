import { Carros } from "./carros";
import { IPropriedadesVeiculo } from "../../types/carros/IPropriedadesVeiculo";
import { Logger } from "../../utils/logger";

export class CarroEsportivo extends Carros {
	private _velocidadeMaxima: number = 0;
	private _modoEsporte: boolean = false;

	constructor(propriedades: IPropriedadesVeiculo, velocidadeMaxima: number) {
		super(propriedades);
		this._velocidadeMaxima = velocidadeMaxima;
	}

	get ativarModo(): boolean {
		return this._modoEsporte;
	}

	set ativarModo(ativaModoEsporte: boolean) {
		this._modoEsporte = ativaModoEsporte;
	}

	ativarModoEsporte(): void {
		if (this._modoEsporte) {
			Logger.warn(`Modo esporte ativado! Prepare-se para alta performance!`);
		} else {
			console.log(`Modo esporte desativado!`);
		}
	}
}
