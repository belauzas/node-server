const express = require('express');
const { readFile } = require('fs').promises;
const html = require('../src/js/core/html.js');
const router = express.Router();
const servicesRoutes = require('./services');
const aboutRoutes = require('./about');

router.use('/services', servicesRoutes);
router.use('/about', aboutRoutes);

router
    .route('/')
    .get(async (request, response) => {
        html('home', {});
        response.send(await readFile('./src/pages/home.html', 'utf8'));
    })

router
    .route('/*')
    .get(async (request, response) => {
        response.send(await readFile('./src/pages/404.html', 'utf8'));
    })

module.exports = router;