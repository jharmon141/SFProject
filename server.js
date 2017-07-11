const express = require(‘express’);
const path = require(‘path’);
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const serveStatic = require(‘serve-static’);
const port = process.env.PORT || 5000;

app.use(history());

app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app = express();
app.use(serveStatic(__dirname));






app.listen(port);
console.log(‘server started ‘+port);
