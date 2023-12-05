const { default: axios } = require('axios');
const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api",(req,res) => {
    res.json({ message:"Hello World from server!" })
});

app.get("/comment",(req,res) => {
    fetch("./db.json")
    .then(result = res.json());
    console.log(`message are: ${result}`)
})









app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

