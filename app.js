const fs = require('fs');
const csv = require('csvtojson');
const { Parser } = require('json2csv');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT);

let districts = [];

(async () => {
    districts = await csv().fromFile('districts.csv');
})();

app.get('/', (req, res) => {
    res.send(districts)
})