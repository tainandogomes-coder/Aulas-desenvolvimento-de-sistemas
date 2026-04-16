const express = require('express')

const app = express()
const port = 3002

app.use(express.json())

const comentariosdoYoutube = [
    { id: 1, post_id: 1, Texto: "se compra um anão, cesce" },
    { id: 2, post_id: 2, Texto: "eu sei que vc está bisbiliotando os nossos PC's" }
]

let NewChat= 3;

app.get("/comentario", (req, res) => {
    res.send(tarefas)
})

app.get("/posts/:id/comentariosdoYoutube", (req, res) => {
    const post_id = parseInt(req.params.id)

    const comentarios = comentariosdoYoutube.find(e => e.post_id === post_id)

    if (!comentarios) {
        return res.status(404).send("comentario não correspondente")
    }

    res.send(comentarios)
})

app.post("/post/:id/comentariosdoYoutube", (req, res) => {
    let comentario = req.body;
    comentario.post_id = NewChat

    comentariosdoYoutube.push(comentario)
    NewChat++

    res.status(201).send("Comentario adicionada com sucesso")
})


app.delete("/comentariosdoYoutube/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const index = comentariosdoYoutube.findIndex(e => e.id === id)

    if (index === -1) {
        return res.status(404).send("Comentario não encontrada")
    }

    comentariosdoYoutube.splice(index, 1)

    res.status(200).send("comentario excluída com sucesso")
})

app.listen(port, () => {
    console.log(`Está rodando em: http://localhost:${port}`)
})