const express = require('express')
const allRoutes = require('./routes/index.js')
const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(allRoutes)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})