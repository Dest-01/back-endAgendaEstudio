const express = require('express')
const app = express();

const middlewares = require('./app/middlewares')
const routes = require('./routes')
require('./db')

app.use(middlewares)
app.use(routes)

module.exports = app