import { Caminhonete } from "./models/carros/caminhonete";
import { CarroEletrico } from "./models/carros/carroEletrico";
import { CarroEsportivo } from "./models/carros/carroEsportivo";

const tesla = new CarroEletrico("Tesla", "S", 600, 450);
// tesla.ligar();
// tesla.acelerar();
// tesla.desligar();
// tesla.carregaBateria();

const ferrari = new CarroEsportivo("Ferrari", "488-GTB", 380, 600);
ferrari.ligar();
ferrari.ligar();
ferrari.acelerar();
ferrari.ativarModo = true;
ferrari.ativarModoEsporte();
ferrari.desligar();

const hilux = new Caminhonete("Toyota", "Hilux", 1000, 500);
// hilux.ligar();
// hilux.transportarDeCarga();
// hilux.acelerar();
// hilux.desligar();