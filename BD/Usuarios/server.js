const express = require('express')
const app = express()
const port = 3002
const db = require('./db')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/usuario', async (req, res) => {
    try{
        const [rows] = await db.query("SELECT * FROM usuario")
        res.json(rows)
    }catch(e){
        console.log(e);
        res.status(500).send("Erro ao buscar usuario!")
        
    }
})

app.get('/usuario/:id', async (req, res) => {
  const id = parseInt(req.params.id);


    if(isNaN(id)){
        res.status(400).send("o id é invàlido!")
    }
    try{
        const [rows] = await db.query("Select * from usuario where id = ?", [id])
        if(rows.length === 0){
            return res.status(400).send("usuario não encontrado")
        }

        res.status(204).send()
    }catch(e){
        console.log(e);
        res.status(500).send("erro ao buscar tarefa!")        
    }
  
})

app.post('/usuario', async (req, res) => {
    let {nome, idade} = req.body;

    if (!nome || !idade){
        res.status(400).send("Nome e Idade devem ser preenchidos!")
    }

    try{
        const [result] = await db.query("INSERT INTO usuario (nome, idade) VALUES (?, ?)", [nome, idade])

        //console.log(result);
        
        //ruslt -> retorna o id (isertId)
        const novoUsuario = {id: result.insertId, nome, idade}
        res.status(201).json(novoUsuario)
    }catch (e){
        console.log(e);
        res.status(500).send("erro ao criar usuario!")   
    }
})

app.put("/usuario/:id", async (req, res) =>{
    const id = parseInt(req.params.id)
    let {nome, idade} = req.body;

    if (isNaN(id)) {
        return res.status(400).send("o id é invalido")
    }
    if (!nome || !idade) {
        return res.status(400).send("nome e idade devem ser preenchido")
    }

    try{
        const [rows] = await db.query("Select * from usuario where id = ?", [id])
        if(rows.length == 0){
            return res.status(400).send("usuario não encontrado")
    }

    const[result] =  await db.query("UPDATE usuario SET nome = ?, idade = ? where id = ?", [nome, idade, id])

    if( result.affectedRows == 0){
        return res.status(400).send("Nenhum dado foi alterado!")
    }

    res.status(204).send()
    }catch (e){
        console.log(e);
        return res.status(500).send("erro ao atualizar usuario!")  
    }
})

app.delete('/usuario/:id', async (req, res) => {
  const id = parseInt(req.params.id);


    if(isNaN(id)){
        return res.status(400).send("o id é invàlido!")
    }
    try{
        const [rows] = await db.query("Select * from usuario where id = ?", [id])
        if(rows.length === 0){
            return res.status(400).send("usuario não encontrado")
        }

        const [result] =  await db.query("DELETE FROM usuario where id = ?", [id])

         if( result.affectedRows == 0){
        return res.status(400).send("Nenhum dado foi alterado!")
    }

    res.status(204).send()
    }catch(e){
        console.log(e);
        return res.status(500).send("erro ao deletar usuario!")        
    }
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))