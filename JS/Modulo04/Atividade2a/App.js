import { Aluno } from "./Entidades/Aluno.js";
import express from 'express';
import bp from 'body-parser';

const app = express();
app.listen(3334);

app.use(bp.urlencoded({
    extended: true
}));

let cleber = new Aluno("Cleber Henrique", "111.333.444-00", "M", "chm@softex.com", 123456);
let stwart = new Aluno("Stwart Magro", "222.333.444-00", "M", "stwart@softex.com", 123456);

app.get('/escolaSoftex/aluno1', (request, response) => {
    return response.send(cleber);
});

app.get('/escolaSoftex/aluno2', (request, response) => {
    return response.send(stwart);
});