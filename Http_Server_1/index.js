const express = require('express')
const app = express() // initializes instance of express
const port = 3000

/*similar to fs.readfile() which has the path of the file
utf-7 and a function which is called when it reads the file
similarly this app.get will be call the function whenever
someone hits the backend server*/

app.get('/', function(req, res)  {
  res.send('Hello World!')
})

app.get('/another-route',function(req,res){
  res.json({
    name: "Dhruv",
    age: "20"
  })
})

app.listen(port)