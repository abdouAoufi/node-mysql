const express = require("express");
const userRouter = require("./routes/user.js");
const connection = require("./db/database");

connection.addListener("connect", () => {
  app.listen(3000, () => {
    console.log("WEB SERVER START AT PORT 3000");
  });
});

const app = express();

// ! very important
app.use(express.json());

app.use(userRouter);
