const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2");
const { response } = require("express");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "tometrade",
});

connection.connect((err) => {
  if (err) throw err;
});

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Node Backend Is Started");
});

function loginvalidation(username, password) {
  return new Promise(function (resolve, reject) {
    connection.query(
      "SELECT * FROM users where username=? AND password=?",
      [username, password],
      function (err, rows) {
        if (rows.length > 0) {
          if (!err) {
            resolve(true);
          } else {
            resolve(false);
          }
        }
        resolve(false);
      }
    );
  });
}

function register(username, email, password) {
  return new Promise(function (resolve, reject) {
    if (username != "" && email != "" && password != "") {
      connection.query(
        "INSERT INTO users(username, email, password) Values (?,?,?)",
        [username, email, password],
        function (err, rows) {
          if (!err) {
            bookList = rows;
            resolve(true);
          } else {
            resolve(false);
          }
        }
      );
    } else {
      resolve(false);
    }
  });
}

// function viewBooks() {
//   const promise1 = new Promise(function (resolve, reject) {
//     connection.query(
//       "SELECT * FROM books",
//       (err, rows) => {
//         if (rows !== undefined && rows !== null) {
//           if (!err) {
//             resolve(rows);
//           } else {
//             resolve(false);
//           }
//         }
//         resolve(false);
//       }
//     );
//   });
// }

//Remove logs once database validations are done
app.post("/loginvalidation", (req, res) => {
  //retVal should consist of return value of loginvalidation function
  retVal = true;
  // console.log(retVal)
  loginvalidation(req.body.username, req.body.password).then(function (value) {
    retVal = value;
    // Do not change below values
    return res.status(200).json({
      key: retVal,
      user: req.body.username,
    });
  });
});

//Remove logs once database pushes are done
app.post("/register", (req, res) => {
  retVal = true;

  //Prototype
  register(req.body.username, req.body.email, req.body.password).then(function (
    value
  ) {
    retVal = value;
    //Dont change below values
    return res.status(200).json({
      key: retVal,
    });
  });
});

function addbooks(bookname, isbn, uid, username) {
  console.log("before then block");
  return new Promise(function (resolve, reject) {
    connection.query(
      "INSERT INTO books(isbn, bookname, uid, username) Values (?,?,?,?)",
      [isbn, bookname, uid, username],
      function (err, rows) {
        console.log(err);
        if (!err) {
          resolve(true);
        } else {
          reject(false);
        }
      }
    );
  });
}

//Api call for Addbooks
app.post("/addbooks", (req, res) => {
  console.log(req.body.bookname);
  console.log(req.body.isbnVal);
  console.log(req.body.username);

  addbooks(req.body.bookname, req.body.isbnVal, req.body.username).then(
    function (value) {
      retVal = value;
      // Do not change below values
      return res.status(200).json({
        key: retVal,
      });
    }
  );
});

app.get("/getbookslist", (req, res) => {
  retVal = true;

  connection.query("SELECT * FROM books", (err, rows) => {
    return res.status(200).json({
      booklist: rows,
    });
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
