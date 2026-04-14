const express = require('express')

const app = express()

const port = 3001

//para a api saber que está trabalhando com o JSON
app.use(express.json())

const produtos = [
    {id:1, nome: "Teclado Mecanico", preco: 350.00, emEstoque: true},
    {id:2, nome: "Mouse Gamer", preco: 180.00, emEstoque: true},
    {id:3, nome: "Monitor Ultrawide", preco: 1500.00, emEstoque: true}
]

let nextId= 3;

app.get("/produtos/emEstoque", (req,res) => {
    res.send(produtos)
})

app.get("/produtos/:pesquisar", (req, res)=>{
    const id = parseInt(req.params.id)

    const produto = produtos.find(e => e.id === id)

    if(!produto){
        return res.status(404).send("Prouto não Encontrado!")
    }

    res.send(produto)
})

app.patch("/produtos/:id", (req, res) =>{
const id = req.params;
const updateProdutos = req.body

const index = produtos.findIndex(e => e.id === id)

if(index === -1){
    return res.status(404).send("Produto não encontrado")
}
produtos[index] = {...produtos[index], ...updateProdutos}

res.json(produtos[index]);
})

app.put("/usuario/:id", (req,res)=>{
    let novoUsuario = req.body;
    const id = parseInt(req.params.id)

    novoUsuario.id = id;

    const index = usuarios.findIndex(e => e.id === id);

    usuarios[index] = novoUsuario;

    res.status(204).send("Usuario Atualizado")
})

app.delete("/usuario/:id", (req, res) =>{
    const id = parseInt(req.params.id)

    const index = usuarios.findIndex(e =>e.id === id);
    usuarios.splice(index, 1)

    res.status(204).send("Usuario deletado com Sucesso!")
})

app.listen(port, ()=>{
    console.log(`está rodando http://localhost:${port}`)
    
})