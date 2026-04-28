const express = require('express')
const app = express()
const port = 3002
const db = require('./db')

app.use(express.json())

app.get('/produto/disponiveis', async (req, res) => {
    try{
        const [rows] = await db.query("SELECT * FROM produtos")
        res.json(rows)
    }catch(e){
        console.log(e);
        res.status(500).send("Erro ao buscar produtos!")
        
    }
})

app.get('/produto/nome/:nome', async (req, res) => {
  const nome = req.params.nome;


    if(isNaN(nome)){
        res.status(400).send("o nome é invàlido!")
    }
    try{
        const [rows] = await db.query("Select * from produto where nome like ?", [nome])
        if(rows.length === 0){
            return res.status(400).send("produto não encontrado")
        }

        res.status(204).send()
    }catch(e){
        console.log(e);
        res.status(500).send("erro ao buscar produto!")        
    }
  
})


app.put("/produto/:id", async (req, res) =>{
    const id = parseInt(req.params.id)
    let {nome, preco, estoque, categoria} = req.body;

    if (isNaN(id)) {
        return res.status(400).send("o id é invalido")
    }
    if (!categoria) {
        return res.status(400).send("categoria é obrigatoria para substituição de produtos")
    }

    try{
        const [rows] = await db.query("Select * from produto where id = ?", [id])
        if(rows.length == 0){
            return res.status(400).send("usuario não encontrado")
    }

    const[result] =  await db.query("UPDATE produto SET nome = ?, preco = ?, categoria = ? where id = ?", [nome, preco,,estoque, categoria, id])

    if( result.affectedRows == 0){
        return res.status(400).send("Nenhum dado foi alterado!")
    }

    res.status(204).send()
    }catch (e){
        console.log(e);
        return res.status(500).send("erro ao atualizar produto!")  
    }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))