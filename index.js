const express = require("express")
const { get } = require("express/lib/response")
const path = require("path")


//express
const app = express()


//configuraciones
app.set("port" , process.env.PORT || 3000)
app.set("views" , path.join(__dirname , "views"))
app.set("view engine" , "ejs")




//middelware
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

//rutas
app.get("/" , (req, res)=>{
    res.render("index")
})


//inicializacion

app.listen(app.get("port") , ()=>{
    console.log("servidor en el puerto"+" "+app.get("port"))
})