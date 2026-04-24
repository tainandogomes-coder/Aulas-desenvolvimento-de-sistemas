const express = require('express')
const app = express()
const port = 3002
const db = require('./db')

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/usuario', async (req, res) => {
    try{
        const [rows] = await db.query("SELECT * FROM usuario")
        res.json(rows)
    }catch(e){
        console.log(e);
        res.status(500).send("Erro ao buscar tarefa!")
        
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
    }catch(e){
        console.log(e);
        res.status(500).send("erro ao buscar tarefa!")        
    }
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))