const app = require('express').Router()

const {
    TaskController 
} = require('../app/controllers')


app.get('/api/task', TaskController.index)
app.post('/api/task', TaskController.store)
app.put('/api/task/:id', TaskController.update)
app.delete('/api/task/:id', TaskController.destroy)

module.exports = app    