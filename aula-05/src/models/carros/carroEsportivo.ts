import { Carros } from "./carros";

export class CarroEsportivo extends Carros {
	private _velocidadeMaxima: number = 0;
	private _modoEsporte: boolean = false;

	constructor(
		marca: string,
		modelo: string,
		velocidadeMaxima: number,
		potencia: number
	) {
		super(marca, modelo, potencia);
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
			console.log(`Modo esporte ativado! Prepare-se para alta performance!`);
		} else {
			console.log(`Modo esporte desativado!`);
		}
	}
}
