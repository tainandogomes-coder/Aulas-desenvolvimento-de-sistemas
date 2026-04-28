const express = require('express')
const app = express()
const port = 3002
const db = require('./db')

app.use(express.json())

app.get('/tarefa', async (req, res) => {
    try{
        const [rows] = await db.query("SELECT * FROM tarefa")
        res.json(rows)
    }catch(e){
        console.log(e);
        res.status(500).send("Erro ao buscar tarefa!")
        
    }
})

app.get('/tarefa/:id', async (req, res) => {
  const id = parseInt(req.params.id);


    if(isNaN(id)){
        res.status(400).send("o id é invàlido!")
    }
    try{
        const [rows] = await db.query("Select * from tarefa where id = ?", [id])
        if(rows.length === 0){
            return res.status(400).send("tarefa não encontrado")
        }

        res.status(204).send()
    }catch(e){
        console.log(e);
        res.status(404).send("erro ao buscar tarefa!")        
    }
  
})

app.post('/tarerfa', async (req, res) => {
    let {titulo} = req.body;

    if (!titulo ){
        res.status(400).send("Titulo devem ser preenchidos!")
    }

    try{
        const [result] = await db.query("INSERT INTO tarefa (titulo) VALUES (?)", [titulo])

        const novoTarefa = {id: result.insertId, titulo}
        res.status(201).json(novoTarefa)
    }catch (e){
        console.log(e);
        res.status(500).send("erro ao criar tarefa!")   
    }
})

app.put("/tarefa/:id", async (req, res) =>{
    const id = parseInt(req.params.id)
    let {titulo, concluida} = req.body;

    if (isNaN(id)) {
        return res.status(400).send("o id é invalido")
    }
    if (!nome || !idade) {
        return res.status(400).send("nome e idade devem ser preenchido")
    }

    try{
        const [rows] = await db.query("Select * from tarefa where id = ?", [id])
        if(rows.length == 0){
            return res.status(400).send("tarefa não encontrado")
    }

    const[result] =  await db.query("UPDATE tarefa SET titulo = ?, concluida = ? where id = ?", [titulo, concluida, id])

    if( result.affectedRows == 0){
        return res.status(400).send("Nenhum dado foi alterado!")
    }

    res.status(204).send()
    }catch (e){
        console.log(e);
        return res.status(500).send("erro ao atualizar tarefa!")  
    }
})

app.delete('/tarefa/:id', async (req, res) => {
  const id = parseInt(req.params.id);


    if(isNaN(id)){
        return res.status(400).send("o id é invàlido!")
    }
    try{
        const [rows] = await db.query("Select * from tarefa where id = ?", [id])
        if(rows.length === 0){
            return res.status(400).send("tarerfa não encontrado")
        }

        const [result] =  await db.query("DELETE FROM tarefa where id = ?", [id])

         if( result.affectedRows == 0){
        return res.status(400).send("Nenhum dado foi alterado!")
    }

    res.status(204).send()
    }catch(e){
        console.log(e);
        return res.status(500).send("erro ao deletar tarefa!")        
    }
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))