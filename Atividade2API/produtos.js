const express = require('express')

const app = express()

const port = 3001

app.use(express.json())

const produtos = [
    {id:1, nome: "Teclado Mecanico", preco: 350.00, emEstoque: true},
    {id:2, nome: "Mouse Gamer", preco: 180.00, emEstoque: true},
    {id:3, nome: "Monitor Ultrawide", preco: 1500.00, emEstoque: true}
]

app.get("/produtos/emEstoque", (req,res) => {
    res.send(produtos)
})

app.get("/produtos/pesquisa/:id", (req, res)=>{
    const id = parseInt(req.params.id)

    const produto = produtos.find(e => e.id === id)

    if(!produto){
        return res.status(404).send("Produto não Encontrado!")
    }

    res.send(produto)
})

app.patch("/produtos/:id", (req, res) =>{
    let atualizaçãoProduto = req.body;
    const id = parseInt(req.params.id)

    atualizaçãoProduto.id = id;

    const index = produtos.findIndex(e => e.id === id);

     produtos[index] = atualizaçãoProduto;

    res.status(204).send("Produto Alterado")
})

app.put("/produtos/:id", (req,res)=>{
    let novoProduto = req.body;
    const id = parseInt(req.params.id)

    novoProduto.id = id;

    const index = produtos.findIndex(e => e.id === id);

     produtos[index] = novoProduto;

    res.status(204).send("Produto Alterado")
})

app.delete("/produtos/:id", (req, res) =>{
    const id = parseInt(req.params.id)

    const index = produtos.findIndex(e =>e.id === id);
    produtos.splice(index, 1)

    res.status(204).send("Produto deletado com Sucesso!")
})

app.listen(port, ()=>{
    console.log(`está rodando http://localhost:${port}`)
    
})