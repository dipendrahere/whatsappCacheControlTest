var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'public'), {
  setHeaders: setCustomCacheControl
}));


app.listen(process.env.PORT || 2000)

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    console.log("hello")
    res.setHeader('Cache-Control', 'no-store')
  }
}