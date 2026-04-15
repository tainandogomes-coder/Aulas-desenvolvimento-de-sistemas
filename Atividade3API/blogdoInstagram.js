const express = require('express')

const app = express()
const port = 3002

app.use(express.json())

const posts = [
    { id: 1, titulo: "Primeiro post", conteudo: "conteudo do primeiro post", autor:"carlos" },
    { id: 2, titulo: "Segundo post", conteudo: "Olá mundo", autor:"ana"}
]

let NovoPost = 3;

app.get("/post", (req, res) => {
    res.send(posts)
})

app.get("/post/autor/:autor", (req, res) => {
    const id = parseInt(req.params.id)

    const autor = posts.find(e => e.id === id)

    if (!autor) {
        return res.status(404).send("Autor não encontrada")
    }

    res.send(autor)
})

app.post("/post", (req, res) => {
    let post = req.body;
    post.id = NovoPost

    posts.push(post)
    NovoPost++

    res.status(201).send("Post adicionada com sucesso")
})

app.patch("/post/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const atualizaçãodePost = req.body.conteudo

    const index = posts.findIndex(e => e.id === id)

    if (index === -1) {
        return res.status(404).send("Post não encontrada")
    }
    if(!atualizaçãodePost){
        return res.status(400).send("Post não atualizado")
    }

    posts[index].conteudo = atualizaçãodePost

    res.status(200).send("Tarefa atualizada com sucesso")
})


app.listen(port, () => {
    console.log(`Está rodando em: http://localhost:${port}`)
})  