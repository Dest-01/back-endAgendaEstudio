
const app = require('./src/app')

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
   console.log('http://localhost:5000')
})