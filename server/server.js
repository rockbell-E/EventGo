const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Conexion exitosa");
})

app.listen(3000, () => {
    console.log("server escuchando en el puerto 3000");
})