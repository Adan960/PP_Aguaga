const express = require("express");
const app = express();

let visitas = 0;
let ultimoAcesso;
let hoje = new Date().toDateString();

// usando o EJS
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/", (_,res) => {
    if(ultimoAcesso != hoje){
        visitas = 0;
        ultimoAcesso = hoje;
    }
    visitas++;
    res.render("index",{
        visitas: visitas
    });
})

app.get("/contatos",(_,res) => {
    res.render("contatos");
})

app.get("/economizar",(_,res) => {
    res.render("economizar");
})

app.get("/saneamento",(_,res) => {
    res.render("saneamento");
})

app.get("/estatisticas",(_,res) => {
    res.render("estatisticas");
})

app.get("/privados",(_,res) => {
    res.render("privados");
})

app.get("/publicos",(_,res) => {
    res.render("publicos");
})

app.listen("8080",() => {console.log("Site rodando em http://localhost:8080")});