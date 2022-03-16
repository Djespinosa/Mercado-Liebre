const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname,"../","public")));

app.get('/', (req,res) => res.sendFile(path.join(__dirname,"views","home.html")));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname,"views","register.html")));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,"views","login.html")));


app.listen(port, () => console.log('El servidor está funcionando en el puerto '+ port));

