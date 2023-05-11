const express = require("express")
const app = express()
const post = require("./post")


app.get("/consulta", function(req, res){
    post.findAll().then(function(post){
        res.render("consulta", {post})
    }).catch(function(erro){
        console.log("Erro ao carregar dados do banco: " + erro)
    })
})

app.listen(8081, function(){
    console.log("Servidor ativo!")
})