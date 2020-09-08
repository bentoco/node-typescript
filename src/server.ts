import app from "./app";
require("dotenv").config();
const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Server listening on ${port}...`);
});
