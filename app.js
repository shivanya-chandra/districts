const fs = require('fs');
const csv = require('csvtojson');
const { Parser } = require('json2csv');
const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('App is listening');
})
let districts = [];

(async () => {
    districts = await csv().fromFile('districts.csv');
})();

app.get('/', (req, res) => {
    res.send(districts)
})