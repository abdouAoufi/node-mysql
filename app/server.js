const express = require("express");
const userRouter = require("./routes/user.js");

const app = express();

app.use(userRouter);

// launch webserver
app.listen(3000, () => {
  console.log("WEB SERVER START AT PORT 3000");
});
