export class Musica {
	private _titulo: string = "";
	private _artista: string = "";
	private _duracao: number = 0;

	constructor(titulo: string, artista: string, duracao: number) {
		this._titulo = titulo;
		this._artista = artista;
		this._duracao = duracao;
	}

	reproduzir(): void {
		console.log(`Reproduzindo "${this._titulo}" - ${this._artista}.`);
	}

	pausar(): void {
		console.log(`"${this._titulo}" foi pausada.`);
	}

	obterDuracaoEmMinutos(): string {
		let minutos = Math.floor(this._duracao / 60);
		let segundos = this._duracao % 60;
		let segundosFormatado = segundos < 10 ? `0${segundos}` : segundos;
		return `A música "${this._titulo}" - ${this._artista} tem ${minutos}:${segundosFormatado}min de duração.`;
	}
}
