export class Conta_Bancaria {
	private _saldo: number = 0;
	private _numeroConta: string = "";

	constructor(numeroConta: string) {
		this._numeroConta = numeroConta;
	}

	set saldo(saldo: number) {
		this._saldo = saldo;
	}

	get saldo(): number {
		return this._saldo;
	}

	depositar(valor: number): void {
		if (valor <= 0) {
			console.log("Você não pode depositar valores menores ou iguais a 0.");
		} else {
			this._saldo += valor;
			console.log(`Você depositou R$${valor.toFixed(2).replace(".", ",")}.`);
		}
	}

	sacar(valor: number): void {
		if (valor > this._saldo) {
			console.log(
				`Erro ao sacar R$${valor
					.toFixed(2)
					.replace(".", ",")}. Saldo insuficiente.`
			);
		} else if (valor <= 0) {
			console.log("Você não pode sacar valores menores ou iguais a 0.");
		} else {
			this._saldo -= valor;
			console.log(`Você sacou R$${valor.toFixed(2).replace(".", ",")}.`);
		}
	}

	consultarSaldo(): string {
		return `Saldo atual: R$${this._saldo.toFixed(2).replace(".", ",")}`;
	}

	obterNumeroConta(): string {
		return `Número da conta: ${this._numeroConta}`;
	}
}
