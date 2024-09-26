import { Animal } from "./models/animal/animal";
import { Cachorro } from "./models/animal/cachorro";
import { Gato } from "./models/animal/gato";
import { Dono } from "./utils/dono";

//* Classes abstratas não podem ser instanciadas, apenas estendidas!
// const animal = new Animal();

//* Cria os animais
const rex = new Cachorro("Rex", "Pastor Alemão");
rex.emitirSom();
rex.correrAtrasDoRabinho();

const miumiu = new Gato("Miumiu", "Siamês");
miumiu.afofarPelo();
miumiu.emitirSom();

//* Cria os donos
const donoDoRex = new Dono("João", rex);
donoDoRex.brincarComAnimal();

const donoDoGato = new Dono("Juliana", miumiu);
donoDoGato.brincarComAnimal();
