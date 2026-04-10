const express = require('express')

const app = express()

const port = 3001

//para a api saber que está trabalhando com o JSON
app.use(express.json())

const usuarios = [
    {id:1, nome: "Tainando Gomes", idade: 20},
    {id:2, nome: "Davi", idade:18}
]

let nextId= 3;

app.get("/usuario", (req,res) => {
    res.send(usuarios)
})

app.get("/", (req,res) =>{
    res.send("helo guys")
})

app.get("/usuario/:id", (req, res)=>{
    // por padrão é uma String
    const id = parseInt(req.params.id)

    const usuario = usuarios.find(e => e.id === id)

    if(!usuario){
        return res.status(404).send("Usuario não Encontrado!")
    }

    res.send(usuario)
})

app.post("/usuario", (req, res) =>{
let usuario = req.body;
usuario.id = nextId
usuarios.push(usuario) 
nextId++
res.status(201).send("Usuario Cadastrado com Sucesso!")
})

app.put("/usuario/:id", (req,res)=>{
    let novoUsuario = req.body;
    const id = parseInt(req.params.id)

    novoUsuario.id = id;

    const index = usuarios.findIndex(e => e.id == id);

    usuarios[index] = novoUsuario;

    res.status(204).send("Usuario Atualizado")
})

app.listen(port, ()=>{
    console.log(`está rodando http://localhost:${port}`)
    
})