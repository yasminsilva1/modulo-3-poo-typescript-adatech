import { Animal } from "./animal";

export class Gato extends Animal {
	constructor(nome: string, raca: string) {
		super(nome, raca);
	}

	// método obrigatório
	emitirSom(): void {
		console.log(
			`O gato chamado ${this._nome}, da raça ${this._raca}, faz Miau!`
		);
	}

	// método específico da classe gato
	afofarPelo(): void {
		console.log(`${this._nome} está afofando o pelo.`);
	}
}
