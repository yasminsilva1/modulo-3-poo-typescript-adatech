import { Carros } from "./models/carros";
import { Pessoa } from "./models/pessoa";

// let pessoa1 = new Pessoa("Yasmin", 21);
// pessoa1.estaVivo = true;
// pessoa1.setTelefone = "5551999999999";
// pessoa1.nascer();
// pessoa1.crescer();
// pessoa1.morrer();

const meuCarro = new Carros("GM");
meuCarro.modelo = "Corsa";
meuCarro.ligar();
