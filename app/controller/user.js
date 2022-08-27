const fs = require("fs");

const signup = (req, res, _next) => {
  const data = JSON.stringify(req.body);
  fs.writeFile(process.cwd() + "/users.json", data, "utf-8", (err, data) => {
    if (err) {
      return res.send({ message: "Error" });
    }
    res.send({ message: "User saved" });
  });
};

module.exports = { signup: signup };
