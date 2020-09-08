import app from "./app";
require("dotenv").config();

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}...`);
});
