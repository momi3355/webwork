const express = require("express");
const morgan = require("morgan");
//const multer = require("multer");
const session = require("express-session");
const app = express();
const port = 3000;

require("dotenv").config({ path: "./.env" });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan(":date[iso] :method :url :status :remote-addr"));
app.use(
  session({
    secret: process.env.SESSTION_PASS,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 60000,
    },
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/bookinfo", require("./routers/bookInfo"));

app.listen(port, function () {
  console.log(`listening server http://localhost:${port}`);
});
