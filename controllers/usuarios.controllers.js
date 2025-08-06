const {response,request} = require('express');

const usuariosGet = (req = request,res = response)=>{
    const {q,nombre='no name',apikey,page=1,limit} = req.query;
    res.status(403).json({
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}
const usuariosPost = (req,res= response)=>{
    const {id,nombre} = req.body;
    res.send({
        msg:'post API - controlador',
        id,
        nombre
    });
}
const usuariosPut = (req,res=response)=>{
    const {id} = req.params;
    res.send({
        msg:'put API - controlador',
        id
    });
}
const usuariosDelete = (req,res= response)=>{
    res.send({
        msg:'delete API - controlador'
    });
}
const usuariosPath = (req,res= response)=>{
    res.send({
        msg:'patch API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPath,
}