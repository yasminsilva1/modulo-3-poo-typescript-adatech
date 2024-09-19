export class Pessoa {
	private nome: string = "";
	private idade: number = 0;
	private telefone: string = "";
	public estaVivo: boolean = true; // valor padrão

	constructor(nome: string, idade: number) {
		this.nome = nome;
		this.idade = idade;
	}

	get getTelefone(): string {
		return this.telefone;
	}

	set setTelefone(numero_telefone: string) {
		if (numero_telefone.length <= 11) {
			console.log("Telefone inválido");
		}
		this.telefone = numero_telefone;
	}

	nascer(): void {
		console.log(this.getTelefone);
		if (!this.estaVivo) {
			console.log(`${this.nome} nasceu!`);
			this.estaVivo = true;
		} else {
			console.log(`${this.nome} já nasceu!`);
		}
	}

	crescer(): void {
		if (this.estaVivo) {
			this.idade++;
			console.log(`${this.nome} fez ${this.idade} ano(s).`);
		} else {
			console.log(`${this.nome} não pode crescer, pois faleceu.`);
		}
	}

	morrer(): void {
		if (this.estaVivo) {
			this.estaVivo = false;
			console.log(`${this.nome} morreu!`);
		} else {
			console.log(`${this.nome} já faleceu!`);
		}
	}
}
