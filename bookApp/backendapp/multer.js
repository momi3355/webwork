const multer = require("multer");
const path = require("path");
const fs = require("fs");

//사용자 정의 스토리지 엔진
const storage = multer.diskStorage({
  //저장되는 위치
  destination: (req, file, cb) => {
    const uploadPath = "uploads/";

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  //파일 위치
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now().toString(16) + //현재시간을 16진수로
        path.extname(file.originalname) //파일 확장자
    );
  },
});

//파일 확장자 필터
const fileFilter = (req, file, cb) => {
  const allowedFileType = [".jpg", ".jpeg", ".png"];

  if (allowedFileType.includes(path.extname(file.originalname))) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type")); //유효하지 않는 파일
  }
};

module.exports = { storage, fileFilter };
