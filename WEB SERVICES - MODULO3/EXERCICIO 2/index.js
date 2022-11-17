//config inicial

const express = require('express')
const app = express()
const mongoose = require('mongoose')



//forma de ler JSON / middlewares são recursos que são executados entre as requisições e respostas
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// rotas da api
const personRoutes = require('./routers/personRouters')

app.use('/person', personRoutes)

// rota inicial / endpoint

app.get('/', (req, res) => {

  // mostrar req

  res.json({message: 'OI Express!'})

})
//entregar uma porta
const DB_USER = 'andre'
const DB_PASSWORD = encodeURIComponent('rc7kgSJtDXIa7daA')

mongoose
.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.eno91gr.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
.then(() =>{
    console.log("Conectamos ao MongoDB!")
    
})
.catch((err) => console.log(err))
app.listen(3000)
