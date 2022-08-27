const connection = require("../db/database");
const fs = require("fs");

const signupFS = (req, res, _next) => {
    const data = req.body;
    if (!data || data.userName === undefined || data.password === undefined) {
        return res.send({ message: "Error please send username and password" });
    }
    if (data.userName.length === 0 || data.password.length === 0) {
        return res.send({
            message: "Error please do not send empty password or userName",
        });
    }
    const result = fs.readFileSync(process.cwd() + "/users.json", "utf-8");
    const resultData = JSON.parse(result);
    const currentUsers = resultData.users || [];
    currentUsers.push(data);
    fs.writeFile(
        process.cwd() + "/users.json",
        JSON.stringify({ users: currentUsers }),
        "utf-8",
        (err, data) => {
            if (err) {
                return res.send({ message: "Error" });
            }
            res.send({ message: "User saved" });
        }
    );
};

const signup = (req, res, next) => {
    const data = req.body;
    if (!data || data.userName === undefined || data.password === undefined) {
        return res.send({ message: "Error please send username and password" });
    }
    if (data.userName.length === 0 || data.password.length === 0) {
        return res.send({
            message: "Error please do not send empty password or userName",
        });
    }
    connection.query(
        `INSERT INTO users.users (username, password) VALUES ('${data.userName}', '${data.password}');`,
        (err, result, fields) => {
            if (err) {
                return res.send({ message: err });
            }
            res.send({ message: "user saved" });
        }
    );
};

module.exports = { signup: signup };