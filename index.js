const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const chefsCardData = require('./data/chefsCardData.json')
// console.log(chefsCardData)
const chefsInfo = require('./data/chefsInfo.json')
// console.log(chefsInfo)
app.use(cors())

app.get('/', (req, res) => {
  res.send('Chef Hunter is Running')
})

// chefs personal info
app.get('/chefsCardData', (req, res)=>{
  res.send(chefsCardData)
})

// specific chefs info
app.get('/chefsInfo', (req, res)=>{
  res.send(chefsInfo)
})

app.get('/chefsCardData/:id', (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(id)
      const chefsCategory = chefsCardData.find(data => parseInt(data.id) === id)
      res.send(chefsCategory)
  
})

app.get('/chefsInfo/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id)
  const selectedChef = chefsInfo.find(n => parseInt(n.id) === id)
  res.send(selectedChef)
})
app.listen(port, () => {
  console.log(`Chef Hunter is Running on port ${port}`)
})