const express = require('express')

const app = express()
const port = 3002

app.use(express.json())

const tarefas = [
    { id: 1, titulo: "Estudar Express", concluida: false },
    { id: 2, titulo: "Fazer Exercicio", concluida: false }
]

let NextTask = 3;

app.get("/tarefa", (req, res) => {
    res.send(tarefas)
})

app.get("/tarefa/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const tarefa = tarefas.find(e => e.id === id)

    if (!tarefa) {
        return res.status(404).send("Tarefa não encontrada")
    }

    res.send(tarefa)
})

app.post("/tarefa", (req, res) => {
    let tarefa = req.body;
    tarefa.id = NextTask

    tarefas.push(tarefa)
    NextTask++

    res.status(201).send("Tarefa adicionada com sucesso")
})

app.put("/tarefa/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const novaTarefa = req.body

    const index = tarefas.findIndex(e => e.id === id)

    if (index === -1) {
        return res.status(404).send("Tarefa não encontrada")
    }

    novaTarefa.id = id
    tarefas[index] = novaTarefa

    res.status(200).send("Tarefa atualizada com sucesso")
})

app.delete("/tarefa/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const index = tarefas.findIndex(e => e.id === id)

    if (index === -1) {
        return res.status(404).send("Tarefa não encontrada")
    }

    tarefas.splice(index, 1)

    res.status(200).send("Tarefa excluída com sucesso")
})

app.listen(port, () => {
    console.log(`Está rodando em: http://localhost:${port}`)
})