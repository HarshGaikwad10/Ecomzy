const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pg = require("pg");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Ecomzy",
  password: "Harsh@10Jan",
  port: 5432,
});

db.connect();

app.post("/login", (req, res) => {
  try {
    db.query(
      "insert into User_Login values($1,$2)",
      [req.body.email, req.body.password],
      (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
        }
      }
    );
  } catch (err) {
    console.log("error during data storing ", err);
  }
  res.status(200).json({ message: "Login Sucessfully" });
});

app.post("/signup", (req, res) => {
  try {
    db.query(
      "insert into User_Signup values($1,$2,$3,$4,$5,$6)",
      [
        req.body.account_type,
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password,
        req.body.c_Password,
      ],
      (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
        }
      }
    );
  } catch (err) {
    console.log("error during data storing ", err);
  }
  res.status(200).json({ message: "Form submitted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});