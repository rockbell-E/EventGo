const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, '../public')))


app.get("/", (req, res) => {
    res.render("index");
});

app.get("/iniciar-sesion", (req, res) => {
    res.render("log-in");
});

app.get("/sobre-nosotros", (req, res) => {
    res.render("about-us");
});

app.get("/registrarse", (req, res) => {
    res.render("register");
});
app.get("/recuperar", (req, res) => {
    res.render("recovery");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
