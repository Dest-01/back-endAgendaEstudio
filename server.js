const PORT = process.env.PORT || 5000
const app = require('./src/app')

app.listen(PORT, ()=> {
   console.log('http://localhost:5000')
})