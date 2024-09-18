export class Animal {
	public nome: string = "";
	public especie: string = "";
	public som: string = "";

	emitirSom(): void {
		if (this.nome && this.especie && this.som) {
			console.log(
				`O animal ${this.nome}, tem especie ${this.especie} e faz ${this.som}`
			);
		} else {
			console.log("Infomações do animal incompletas");
		}
	}
}
