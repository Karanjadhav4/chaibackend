const express = require('express')
require('dotenv').config()

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twiter',(req,res)=>{
    res.send('karan dotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1> please enter the chai and code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai and code</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})