const express = require("express");
const app = express();

app.use(express.static("./web_client/public"));

app.set("view engine", "ejs");
app.set("views", "./web_client/views");

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), function () {
  console.log("Running on port", app.get("port"));
});

app.get("/", (req, res) => {
  res.render("index");
});
