const express = require('express');
const { readFile } = require('fs').promises;
const router = express.Router();

router
    .route('/:service')
    .get(async (request, response) => {
        switch (request.params.service) {
            case 'ux':
            case 'web-dev':
                response.send(await readFile('./src/pages/service-' + request.params.service + '.html', 'utf8'));
                break;

            default:
                response.send(await readFile('./src/pages/404.html', 'utf8'));
                break;
        }
    })

router
    .route('/')
    .get(async (request, response) => {
        response.send(await readFile('./src/pages/services.html', 'utf8'));
    })

module.exports = router;