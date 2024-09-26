import { IEmissorSom } from "../../types/IEmissorSom";

export abstract class Animal implements IEmissorSom {
	protected _nome: string = "";
	protected _raca: string = "";

	constructor(nome: string, raca: string) {
		this._nome = nome;
		this._raca = raca;
	}

	get nome(): string {
		return this._nome;
	}

	//* Método abstrato - força as subclasses à implementar
	abstract emitirSom(): void;

	correr(): void {
		console.log(`O animal ${this._nome} corre rápido.`);
	}
}
