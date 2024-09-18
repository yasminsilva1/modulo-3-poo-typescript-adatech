//* TIPAGEM IMPLÍCITA
let nome = "Yasmin"; // string
// nome = 45; // ERRO - Type 'number' is not assignable to type 'string'.

let carro = "Fusca"; // string

let ligado = false; // boolean
// ligado = "teste"; // ERRO - Type 'string' is not assignable to type 'boolean'.

let valorNulo = null; // null

let pessoa = {
	nome: "Pedro",
	idade: 30,
};
// pessoa = []; // ERRO

let valorAny: any = "test";

//* TIPAGEM EXPLÍCITA
// Array<string | number | boolean>
let dadosArray: (string | number | boolean)[] = [
	"joao",
	45,
	"pedro",
	"tiago",
	false,
];
dadosArray.push(true);
// console.log(dadosArray);

let primeiroNome: string = "Everton";
let valorNull: null = null;
let valorUndefined: undefined;

//* UNION TYPES
let valor: string | number | boolean = "um";
valor = false;
valor = 45;
// console.log(valor);

//* VOID - ausência de valor de retorno em funções
function mensagem(): void {
	console.log("Aviso!");
}
mensagem();

function saudacao(pessoa: string): string {
	return `Olá, ${pessoa}!`;
}

let resultado = saudacao("João");
console.log(resultado);

//* TIPAGEM EM PROPRIEDADES DE OBJETOS LITERAIS
let produto: { nome: string; preco: number } = {
	nome: "Camisa",
	// nome = false, ERRO
	preco: 39.99,
};

produto.nome = "Tênis";
// produto.preco = false; ERRO
console.log(produto);
