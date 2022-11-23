const express = require('express')
const Money =require('./moneySchema')
const app = express()
const port = 5000
const mongoose = require('mongoose');
const cors = require('cors')


app.use(cors())
app.use(express.json());


app.post('/money', (req, res) => {

    const novoMoney = new Money({
        type:'cashout', data:'20/08/2022', horario:'12:00', valor:'R$ 24,39'
    });
  
    novoMoney
      .save()
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/money', (req, res) => {
    Money.find()
    .then(data => {
      res.json(data);
    })
  })

app.get('/users', (req, res) => {

const mockMoney = [
    {type:'cashout', data:'20/08/2022', horario:'12:00', valor:'R$ 24,39'},
    {type:'cashout', data:'19/05/2022', horario:'09:00', valor:'R$ 50,82'},
    {type:'cashout', data:'02/01/2022', horario:'13:00', valor:'R$ 444,77'},
    {type:'cashout', data:'31/12/2021', horario:'16:00', valor:'R$ 556,59'},
    {type:'cashout', data:'14/07/2021', horario:'17:00', valor:'R$ 737,00'},
    {type:'cashout', data:'29/05/2021', horario:'07:00', valor:'R$ 454,15'},
    {type:'cashout', data:'03/06/2021', horario:'22:00', valor:'R$ 10,40'},
    {type:'cashin', data:'20/08/2022', horario:'12:00', valor:'R$ 24,39'},
    {type:'cashin', data:'19/05/2022', horario:'09:00', valor:'R$ 50,82'},
    {type:'cashin', data:'02/01/2022', horario:'13:00', valor:'R$ 444,77'},
    {type:'cashin', data:'31/12/2021', horario:'16:00', valor:'R$ 556,59'},
    {type:'cashin', data:'14/07/2021', horario:'17:00', valor:'R$ 737,00'},
    {type:'cashin', data:'29/05/2021', horario:'07:00', valor:'R$ 454,15'},
    {type:'cashin', data:'03/06/2021', horario:'22:00', valor:'R$ 10,40'},
]
    res.json(mockMoney)
  })

  mongoose
  .connect('mongodb://db:27017/crud-node-mongo-docker', {
    useNewUrlParser: true
  })
  .then(result => {
    console.log('MongoDB Conectado');
  })
  .catch(error => {
    console.log(error);
  });

app.listen(port,()=>console.log('Rodando na porta',port))