const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Hello" });
});
app.listen(port, () => {
  console.log(`app is listening ${port}`);
});
console.log("hello");
