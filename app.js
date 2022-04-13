const server = require("./models/serever")

//El rest server es el caso cuando tu servidor está enfocado en presentar APIs al exterior Michael
require("dotenv").config()

const Server=new server()





Server.listen()