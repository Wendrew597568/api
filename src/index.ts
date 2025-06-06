
import { error } from 'console';
import express from 'express'; // Importa o Express
import { restartServer } from './restart';
const app = express(); // Inicializa o servidor
let mg = "Seja bem-vindo ao servidor destinyz"
app.use(express.json());

app.get('/ola', function (req, res) {
    res.status(200).send(mg)
})

app.post('/ola', function (req, res) {
    console.log(req.body)
    if (req.body) {
        const body: lista_nomes[] = req.body?.list
        body.forEach(result => {
            if (result.name == "wendrew") {
                res.send("Passou")
            }
            console.log(result.name)
        });
    } else {
        console.log("Não tem nada")
    }
})

interface lista_nomes {
    name: string
}

app.post('/restart', function (req, res) {
    restartServer()
})





app.listen(3000, function () {
    console.log(`${mg}`);
});











// import express from 'express'; // Importa o Express
// const app = express(); // Inicializa o servidor

// app.use(express.json()); // Middleware para processar JSON no body das requisições

// let welcomeMessage = "Seja bem-vindo ao servidor destinyz"; // Mensagem padrão

// // Rota para retornar a mensagem atual
// app.get('/ola', function (req, res) {
//     res.send(welcomeMessage); // Retorna a mensagem dinâmica
// });

// // Rota para definir uma nova mensagem
// app.post('/ola', function (req, res) {
//     const { newMessage } = req.body; // Extrai a nova mensagem do corpo da requisição
//     if (newMessage) {
//         welcomeMessage = newMessage; // Atualiza a mensagem
//         res.status(200).send({ status: "Mensagem atualizada com sucesso!" });
//     } else {
//         res.status(400).send({ error: "Por favor, envie uma mensagem válida no corpo da requisição." });
//     }
// });

// // Inicializa o servidor na porta 8081
// app.listen(8081, function () {
//     console.log("Servidor rodando na máquina");
// });
