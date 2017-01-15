const express       = require('express'),
      mongoose      = require('mongoose'),
      bodyParser    = require('body-parser'),
      path          = require('path'),
      index         = require('./routes/index'),
      api           = require('./routes/api'),
      app           = express(),
      port          = 3000;

//View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))
app.engine('html', require('ejs').renderFile)

//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//routes
app.use('/', index)
app.use('/api', api)

//server
app.listen(port, err =>{
  if(err){
    console.log(`Error enabling listen on port ${port}`)
  }
  console.log(`Server is now listening on port ${port}`)
}
