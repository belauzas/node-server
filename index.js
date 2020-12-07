const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 3000;

const app = express();

const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use(express.static('src', options));
app.use(cors());
app.use('/', routes);

app.listen(port, (err) => {
    if (err) {
        console.log('There was a problem', err);
        return;
    }
    console.log('App available on http://localhost:' + port);
});