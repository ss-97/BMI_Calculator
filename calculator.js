const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));       //used to access the html code, it's properties and it's values.

app.post("/", function(req, res)                       // used to handle the post requests and post on our web page, whatever our browser requests for.
{

  var height = parseFloat(req.body.h);                // we use 'parseFloat' here, because our input can also be a decimal number.
  var mass = parseFloat(req.body.w);
  var bmi = mass / (height * height);

  if(bmi > 20.1)
  var conclusion = "You are overweight.";
  else if(bmi < 20.1)
  var conclusion = "You are underweight.";
  else
  var conclusion = "You have a normal BMI."
  res.send("Your Body Mass Index comes out to be : " + bmi + ".   \n" + conclusion);    // this is the required thing to be posted on the browser in this project.

});

app.get("/", function(req, res)          // this method defines that what should happen when the browser makes the GET Request. Here, once the request is made, we are sending the file, 'index.html' to the browser.
{
res.sendFile(__dirname + "/index.html");
});


app.listen("3090", function()            // tells to listen on a specific port for any HTTP requests that gets sent to our server. Here, the port chosen = 3090.
{
  console.log("The server has started on the port 3090");               // this was not needed. we did it just to see that when our port is setup and our server is running.
});
