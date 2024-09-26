//* Especificando os tipos
// function inverteArray(arr: string[] | number[]): string[] | number[] {
// 	return arr.reverse();
// }

//* Função genérica - GENERICS
function inverteArray<T>(arr: T[]): T[] {
	return arr.reverse();
}

const numeros = [1, 2, 3, 4];
const numerosInvertidos = inverteArray<number>(numeros);
console.log(numerosInvertidos);

const frutas = ["maçã", "banana", "uva"];
const frutasInvertidas = inverteArray<string>(frutas);
console.log(frutasInvertidas);

const validacao = [false, false, true];
const validacaoInvertida = inverteArray<boolean>(validacao);
console.log(validacaoInvertida);