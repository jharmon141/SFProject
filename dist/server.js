const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 5000;

app = express();
app.use(history());
app.use(serveStatic(__dirname));

app.listen(port);
console.log('server started '+ port);
