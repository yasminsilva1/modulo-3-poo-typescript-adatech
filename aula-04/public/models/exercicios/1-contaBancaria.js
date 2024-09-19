"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta_Bancaria = void 0;
class Conta_Bancaria {
    constructor(numeroConta) {
        this._saldo = 0;
        this._numeroConta = "";
        this._numeroConta = numeroConta;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo;
    }
    depositar(valor) {
        if (valor <= 0) {
            console.log("Você não pode depositar valores menores ou iguais a 0.");
        }
        else {
            this._saldo += valor;
            console.log(`Você depositou R$${valor.toFixed(2).replace(".", ",")}.`);
        }
    }
    sacar(valor) {
        if (valor > this._saldo) {
            console.log(`Erro ao sacar R$${valor
                .toFixed(2)
                .replace(".", ",")}. Saldo insuficiente.`);
        }
        else if (valor <= 0) {
            console.log("Você não pode sacar valores menores ou iguais a 0.");
        }
        else {
            this._saldo -= valor;
            console.log(`Você sacou R$${valor.toFixed(2).replace(".", ",")}.`);
        }
    }
    consultarSaldo() {
        return this._saldo;
    }
    obterNumeroConta() {
        return `Número da conta: ${this._numeroConta}`;
    }
}
exports.Conta_Bancaria = Conta_Bancaria;
