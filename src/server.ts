require("dotenv").config();
const express = require("express")
const router = require("./routes");
const app = express();
const port = process.env.SERVER_PORT;


app.use(router);

app.listen(port, () => {
  console.log(`Server listening on ${port}...`);
});
