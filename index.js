const express = require('express')
const app = express()
const axios = require('axios');

app.get('/tracking/:resi', async (req, res) => {
    const resi = req.params.resi
    const url = 'https://everpro.id/fitur-cek-resi/php/lacak_paket.php';
    var data = new FormData();
    data.append('resi', resi);
    data.append('kurir', 'spx');
    axios.post(url, data)
        .then(response => {
            res.send(response.data)
        })
})
app.listen(process.env.PORT || 3000)