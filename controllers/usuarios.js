 const usuariosget=(req,res)=>{
   
    const {q,nombre} =req.query
        //se suele evniar json 
        res.json({
            msg:"get api",
            q,
            nombre
        })
    
}

const usuariosput=(req,res)=>{
   
    const id=req.params.id;
    //se suele evniar json 
    res.json({
        msg:"put api",
        id:id
    })

}

const usuariosPost=(req,res)=>{
    const body=req.body

        //se suele evniar json 
        res.json({
            msg:"post de api",
            body
        })
    
}

const usuariosPatch=(req,res)=>{
    res.json({
        msg:"patch de api"
    })
}

const usuariosDelete=()=>{
    res.json({
        msg:"delete de api"
    })
}

module.exports={
    usuariosget,
    usuariosput,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}

//primeros pasos primero que nada separamos las rutas en su propia arhivo en
//carpeta router pára poder enlasarlo debes de exporta Router
//y lo llamamos en server.js con use.app ruta y requier
//despues en las rutas separamos el contenido de esta en una carpeta llamdo conrtolaador