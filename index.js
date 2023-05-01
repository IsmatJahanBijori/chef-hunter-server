const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Chef Hunter is Running')
})

app.listen(port, () => {
  console.log(`Chef Hunter is Running on port ${port}`)
})