const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

// Getting Request 
app.get('/', (req, res) => { 
  
  // Sending the response 
  res.send('Hello World!') 
   
  // Ending the response  
  res.end() 
}) 

// Establishing the port  
const PORT = process.env.PORT || 5016; 

// Executing the sever on given port number 
app.listen(PORT, console.log( 
`Server started on port ${PORT}`));

app.use("/api", routes);

//app.listen(port, () => console.log("Server is up"));
