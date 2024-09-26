import { Animal } from "../models/animal/animal";

export class Dono<T extends Animal> {
	constructor(public nome: string, public animal: T) {}

	brincarComAnimal(): void {
		console.log(`${this.nome} está brincando com ${this.animal.nome}.`);
	}
}
