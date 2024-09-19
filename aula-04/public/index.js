"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("./models/pessoa");
let pessoa1 = new pessoa_1.Pessoa("Yasmin", 21);
pessoa1.estaVivo = true;
pessoa1.setTelefone = "5551999999999";
pessoa1.nascer();
pessoa1.crescer();
pessoa1.morrer();
