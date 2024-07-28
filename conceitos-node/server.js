import express from 'express'
import cors from 'cors'
import { Prisma } from '@prisma/client'

const app = express()

app.use(express.json())
app.use(cors())



app.get('/usuarios', (req, res) => {
    res.send("olá, rota acessada com sucesso")
})

app.post('/usuarios',async (req, res) => {

    

    res.status(201).json({ menssage: 'usuarios criado 22' })
})



app.listen(3000)

//hofime7734 qA3NYyFX3gU4HuxJ