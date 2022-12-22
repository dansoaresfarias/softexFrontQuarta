import { Professor } from "./Classes/Professor.js";
import { Aluno } from "./Classes/Aluno.js";
import { Disciplina } from "./Classes/Disciplina.js";
import { Avaliacao } from "./Classes/Avaliacao.js";


let henrique = new Aluno("Carlos Henrique", "111.333.444-00", "M", "chm@softex.com", 123456, "ADS");
let paulo = new Aluno("Paulo César", "111.333.444-40", "M", "pcrs@softex.com", 123457, "ADS");
let jonathas = new Professor("Jonathas Carneiro", "123.456.879-00", "M", "jcs@softex.com", "ADS", "POO", 3580);
let poo = new Disciplina("2123", "Programação Orientada a Objeto", 80, "ADS", jonathas);
let nota1Paulo = new Avaliacao(8, paulo.matricula, poo.codigo);
let nota2Paulo = new Avaliacao(9, paulo.matricula, poo.codigo);
let nota3Paulo = new Avaliacao(7, paulo.matricula, poo.codigo);


poo.matricula(paulo);
poo.lancarNota(nota1Paulo);
poo.lancarNota(nota2Paulo);
poo.lancarNota(nota3Paulo);

console.log(poo);
console.log(poo.calcularMedia(paulo));