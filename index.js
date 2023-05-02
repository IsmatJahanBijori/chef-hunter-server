const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const chefsCardData = require('./data/chefsCardData.json')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Chef Hunter is Running')
})

app.get('/chefsCardData', (req, res)=>{
  res.send(chefsCardData)
})

app.listen(port, () => {
  console.log(`Chef Hunter is Running on port ${port}`)
})