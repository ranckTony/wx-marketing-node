const fs = require("fs");
const express = require("express");
const router = express.Router();

const multer = require("multer");
const savePath = "public/upload/";
const upload = multer({ dest: savePath });
const filename = "file";
function createFileName() {
  return new Date().getTime() + Math.round(Math.random() * 10000);
}

function saveFile(req) {
  const file = req.file;
  let filename = createFileName();
  let path = savePath;

  switch (file.mimetype) {
    case "image/jpeg": {
      path += filename + ".jpg";

      break;
    }
    case "image/png": {
      path += filename + ".png";

      break;
    }
    default: {
      res.send("上传文件格式不支持请上传png与jpg图片");
    }
  }

  fs.renameSync(file.path, path);
  const fullpath = `${req.protocol}://${req.headers.host}/${path}`;

  return {
    filename,
    path,
    fullpath,
  };
}

router.post("/upload", upload.single(filename), (req, res) => {
  const { filename, path, fullpath } = saveFile(req);
  const params = {
    filename,
    path,
    fullpath,
  };
  res.json(params);
});

module.exports = router;
