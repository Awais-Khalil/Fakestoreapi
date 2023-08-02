const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require('dotenv').config()
var cors = require('cors')
const { readdirSync } = require("fs")

app.use(cors())

const products = require("./routes/products.js")
const cart = require("./routes/cart.js")


readdirSync("./routes").map((file) => app.use("/", require("./routes/" + file)))

app.get('/', (req, res) => {
    res.send('Hello World!');
})








app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

