const express = require("express")
const path = require("path")
const port = 3000 || process.env.PORT
const app = express()

const expressLayout = require("express-ejs-layouts")


// make public folder static 
const publicFolderPath = path.join(__dirname, "./public")
app.use(express.static(publicFolderPath))

app.get("/", (req, res) => {
    res.render("index")
})

// middlewares 
app.use(expressLayout)
app.set("layout", "layout/main")
app.set("view engine", "ejs")


app.listen(port, () => {
    console.log(`this server runing at ${port}`)
})