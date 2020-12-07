const express = require('express');
const { readFile } = require('fs').promises;
const router = express.Router();

router
    .route('/:about')
    .get(async (request, response) => {
        switch (request.params.about) {
            default:
                response.send(await readFile('./src/pages/404.html', 'utf8'));
                break;
        }
    })

router
    .route('/')
    .get(async (request, response) => {
        response.send(await readFile('./src/pages/about.html', 'utf8'));
    })

module.exports = router;