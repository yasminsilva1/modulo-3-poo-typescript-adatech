import { Caminhonete } from "./models/carros/caminhonete";
import { CarroEsportivo } from "./models/carros/carroEsportivo";
import { Carros } from "./models/carros/carros";
import { IPropriedadesVeiculo } from "./types/carros/IPropriedadesVeiculo";

const propriedadesCaminhonete: IPropriedadesVeiculo = {
	marca: "Toyota",
	modelo: "Corolla",
	potenciaMotor: 250,
};

const propriedadesCarroEsportivo: IPropriedadesVeiculo = {
	marca: "Ferrari",
	modelo: "488 GTB",
	potenciaMotor: 300,
};

const hilux = new Caminhonete(propriedadesCaminhonete, 1000);
hilux.ligar();
hilux.acelerar();
hilux.desligar();
console.log(hilux.obterInformacoes());
console.log(hilux);

const ferrari = new CarroEsportivo(propriedadesCarroEsportivo, 350);
ferrari.ligar();
ferrari.acelerar();
ferrari.ativarModo = true;
ferrari.ativarModoEsporte();
ferrari.desligar();

console.log(Carros.obterTotalCarrosCriados());