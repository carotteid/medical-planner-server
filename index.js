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

app.get('/', (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5030;
//app.listen(PORT);

app.use("/api", routes);

app.listen(PORT, () => console.log("Server is up"));
