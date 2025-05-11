const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const session = require("express-session");
const fs = require("fs");
const { storage, fileFilter } = require("./multer");

const app = express();
const port = 3000;

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 15, //15 MB
  },
  fileFilter: fileFilter,
});

require("dotenv").config({ path: "./.env" });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan(":date[iso] :method :url :status :remote-addr"));
app.use(express.static("uploads")); //정적파일
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

app.post("/upload/image", upload.single("file"), (req, res) => {
  console.log(`file uploaded: ${req.file.filename}`);
  res.status(200).send({ fileName: req.file.filename });
});

app.delete("/delete/:file", (req, res) => {
  const file = req.params.file;
  //console.log(`file deleted: ${file}`);
  //파일 삭제
  if (fs.existsSync(`./uploads/${file}`)) {
    fs.unlinkSync(`./uploads/${file}`);
    res.status(200).send({ fileName: file });
  } else {
    res.status(404).send("not found file");
  }
});

app.use("/bookinfo", require("./routers/bookInfo"));

app.listen(port, function () {
  console.log(`listening server http://localhost:${port}`);
});
