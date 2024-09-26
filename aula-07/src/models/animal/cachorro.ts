import { Animal } from "./animal";

export class Cachorro extends Animal {
	constructor(nome: string, raca: string) {
		super(nome, raca);
	}

	// método obrigatório
	emitirSom(): void {
		console.log(
			`O cachorro chamado ${this._nome}, da raça ${this._raca}, late: Au au!`
		);
	}

	correrAtrasDoRabinho(): void {
		console.log(`${this._nome} está correndo atrás do seu rabinho.`);
	}
}
