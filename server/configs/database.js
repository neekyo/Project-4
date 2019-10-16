const mongoose = require('mongoose')

// Don't forget to set "MONGODB_URI" in ~/server/.env
const uri = 'mongodb+srv://niko:niko@cluster0-ciatq.mongodb.net/test?retryWrites=true&w=majority'
  //process.env.MONGODB_URI 

  // || `mongodb://localhost/please-set-process-env-mongodb-uri`

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })
