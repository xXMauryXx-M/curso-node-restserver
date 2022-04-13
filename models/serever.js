//post man es exlenter como una simulacion de una app que ya tiene creada y exelnte para provar tu endpoind  
const express=require("express")
const cors=require("cors")
class server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;

  //middlewares
  this.middlewares()


        this.routes()
    }

    middlewares(){
        //cors mas que nada por seguridad
        this.app.use( cors())
        //lectura y parseo del body
        this.app.use(express.json())
    //cuando usas un middle ware use la ruta de app.get /no sirve
        this.app.use(express.static("public"))//la palabra use hace referecia al middlewares
    }
    routes(){
        this.app.use("/api/usuarios",require("../routes/user"))
       
    }
    listen(){
        this.app.listen(this.port)
    }

}

module.exports=server