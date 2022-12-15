//import { Aluno } from "./Entidades/Aluno.js";
import express from 'express';
import bp from 'body-parser';

const app = express();
app.listen(3333);

app.use(bp.urlencoded({
    extended: true
}));

//let cleber = new Aluno("Cleber Henrique", "111.333.444-00", "M", "chm@softex.com", 123456);
//let stwart = new Aluno("Stwart Magro", "222.333.444-00", "M", "stwart@softex.com", 123456);

var pessoa = {
    // Atributos
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    endereco: {
      uf: 'PE',
      cidade: 'Recife',
      bairro: 'Boa Vista',
      rua: 'Dom Bosco',
      numero: '1000' 
    }
};

app.get('/escolaSoftex/aluno1', (request, response) => {
    return response.send(pessoa);
});

app.get('/escolaSoftex/aluno2', (request, response) => {
    return response.send(stwart);
});