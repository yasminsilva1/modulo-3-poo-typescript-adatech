import { CarrinhoCompras } from "./models/carrinhoDeCompras/carrinhoCompras";
import { ItemCarrinho } from "./models/carrinhoDeCompras/itemCarrinho";
import { IPropriedadesProduto } from "./types/carrinhoDeCompras/IPropriedadesProduto";

// import { Caminhonete } from "./models/carros/caminhonete";
// import { CarroEsportivo } from "./models/carros/carroEsportivo";
// import { Carros } from "./models/carros/carros";
// import { IPropriedadesVeiculo } from "./types/carros/IPropriedadesVeiculo";

// const propriedadesCaminhonete: IPropriedadesVeiculo = {
// 	marca: "Toyota",
// 	modelo: "Corolla",
// 	potenciaMotor: 250,
// };

// const propriedadesCarroEsportivo: IPropriedadesVeiculo = {
// 	marca: "Ferrari",
// 	modelo: "488 GTB",
// 	potenciaMotor: 300,
// };

// const hilux = new Caminhonete(propriedadesCaminhonete, 1000);
// hilux.ligar();
// hilux.acelerar();
// hilux.desligar();
// console.log(hilux.obterInformacoes());
// console.log(hilux);

// const ferrari = new CarroEsportivo(propriedadesCarroEsportivo, 350);
// ferrari.ligar();
// ferrari.acelerar();
// ferrari.ativarModo = true;
// ferrari.ativarModoEsporte();
// ferrari.desligar();

// console.log(Carros.obterTotalCarrosCriados());

const propriedadesCamiseta: IPropriedadesProduto = {
	nome: "Camisa",
	preco: 25,
};

const propriedadesCalcaJeans: IPropriedadesProduto = {
	nome: "Calça Jeans",
	preco: 50,
};

// //* Instancia o ItemCarrinho
const camiseta = new ItemCarrinho(propriedadesCamiseta, 1);
const calcaJeans = new ItemCarrinho(propriedadesCalcaJeans, 2);
console.log(
	`Subtotal do produto "${
		camiseta.produto.nome
	}": R$${camiseta.calcularSubtotal()}`
);
console.log(
	`Subtotal do produto "${
		calcaJeans.produto.nome
	}": R$${calcaJeans.calcularSubtotal()}`
);

//* Instancia o CarrinhoCompras
const carrinhoDeCompras = new CarrinhoCompras([]);
carrinhoDeCompras.mostrarTodosItens();

carrinhoDeCompras.adicionarItem(propriedadesCamiseta, 1);
carrinhoDeCompras.adicionarItem(propriedadesCalcaJeans, 2);
carrinhoDeCompras.mostrarTodosItens();
console.log(carrinhoDeCompras.calcularTotal());

carrinhoDeCompras.removerItem(propriedadesCamiseta);
carrinhoDeCompras.removerItem(propriedadesCalcaJeans);
carrinhoDeCompras.mostrarTodosItens();
console.log(carrinhoDeCompras.calcularTotal());

// //* Tentando remover um item que não existe no carrinho
const propriedadesCasaco: IPropriedadesProduto = {
	nome: "Casaco de Lã",
	preco: 250,
};
carrinhoDeCompras.removerItem(propriedadesCasaco);
