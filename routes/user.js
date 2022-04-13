const{Router}=require("express")
const { usuariosget, usuariosput, usuariosPost, usuariosDelete, usuariosPatch } = require("../controllers/usuarios")
//rouyter me va a permitir hacer como un tipo de insancia con mis rutas 

const router=Router()

router.get("/",usuariosget)
router.put("/:id",usuariosput)
router.post("/",usuariosPost)
router.delete("/",usuariosDelete)
router.patch("/",usuariosPatch)



module.exports=router