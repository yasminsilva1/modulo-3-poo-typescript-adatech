import { Animal } from "./models/animal";
import { Carros } from "./models/carros";
import { Pessoa } from "./models/pessoa";
import { Biblioteca } from "./models/exercicios/1-biblioteca";
import { Pedido } from "./models/exercicios/2-prato";

const meuCarro = new Carros();
meuCarro.marca = "GM";
meuCarro.modelo = "Corsa";
meuCarro.ligar();
meuCarro.acelerar();
meuCarro.desligar();

const meuAnimal = new Animal();
meuAnimal.nome = "Gato";
meuAnimal.especie = "Felinos";
meuAnimal.som = "MI AU";
meuAnimal.emitirSom();

const meuCachorro = new Animal();
meuCachorro.nome = "Cachorro";
meuCachorro.especie = "Viralata";
meuCachorro.som = "AU AU";
meuCachorro.emitirSom();

const pessoa = new Pessoa();
pessoa.nome = "João";
pessoa.estaVivo = false;
pessoa.idade = 45;
pessoa.nascer();
pessoa.crescer();
pessoa.morrer();

const livro1 = new Biblioteca();
livro1.titulo = "Código Limpo (Clean Code)";
livro1.autor = "Robert C. Martin";
// livro1.categoria = "Tecnologia";
// livro1.numeroPaginas = 422;
livro1.disponivel = true;
livro1.ativo = true;

livro1.exibirDetalhes();
livro1.consultaDisponibilidade();
livro1.emprestaLivro();
livro1.consultaDisponibilidade();
livro1.renovarEmprestimo();
livro1.removerLivro();

const prato1 = new Pedido();
prato1.pratoNome = "Omelete";
prato1.pratoPreco = 15;
prato1.garcomNome = "João";
prato1.garcomMatricula = 1234;
prato1.mesa = 3;
prato1.quantidade = 2;

prato1.definirPrato();
prato1.definirGarcom();
prato1.definirDetalhesPedido();
prato1.exibirPedido();
