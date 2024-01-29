const connectToMongo = require('./db');

const express = require('express')


var cors = require('cors')//#1
const app = express() //#2
 
app.use(cors()) //#3


const port = 5000  // backend will run on port no 5000 and frontend will be in 3000 

app.use(express.json())
connectToMongo();

app.use('/api/auth', require('./routes/auth'))


app.use('/api/notes', require('./routes/notes'))

//  app.get('/api/notes',require('./routes/notes') )




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
