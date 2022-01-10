const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log("Express started on port", PORT)
})

app.get("/", async (req, res, next) => {
    return res.status(200).send("Up!")
})

module.exports = app