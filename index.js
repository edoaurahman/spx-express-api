const express = require('express')
const app = express()
const cheerio = require('cheerio');
const axios = require('axios');
const scraperjs = require('scraperjs');

app.get('/tracking', (req, res) => {
    scraperjs.DynamicScraper.create('https://spx.co.id/m/tracking-detail/SPXID030360806343')
    .scrape(function($) {
        return $(".log-item").map(function() {
            return $(this).find(".log-item-status").text();
        }).get();
    })
    .then(function(news) {
        console.log(news);
    })
})
app.listen(process.env.PORT || 3000)