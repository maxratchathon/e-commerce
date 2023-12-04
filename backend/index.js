const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api",(req,res) => {
    res.json({})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});