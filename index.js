const express = require("express")
const connection = require('./config/db')
const newsRouter = require('./routes/news')
const cors = require('cors');
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors());
app.use("/news",newsRouter)

app.listen(PORT, async () => {
    await connection
    console.log(`server Listening on port ${PORT}`)
})
