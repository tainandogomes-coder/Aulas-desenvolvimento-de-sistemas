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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))