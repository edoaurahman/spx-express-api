const express = require('express')
const app = express()
const axios = require('axios');

app.get('/tracking/:resi', async (req, res) => {
    const resi = req.params.resi
    const url = `https://api.binderbyte.com/v1/track?api_key=cb978c0a4a9574dafc1e630885296ea231bb7964cea07ebf34e638672f66a347&courier=spx&awb=${resi}`;
    const response = await axios.get(url);
    res.send(response.data);
})
app.listen(process.env.PORT || 3000)