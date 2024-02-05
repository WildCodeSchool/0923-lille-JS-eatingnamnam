const multer = require("multer");
const fs = require("fs");

const storage = multer({ dest: "./public/assets/uploads/" });

const uploadService = storage.single("file");

const handleFileUpload = (req, res, next) => {
  const { originalname, filename } = req.file;
  const [originalfilename, fileextension] = originalname.split(".");

  fs.rename(
    `./public/assets/uploads/${filename}`,
    `./public/assets/uploads/${filename}-${originalfilename}.${fileextension}`,
    (err) => {
      if (err) {
        throw err;
      }
      next();
      res.send("File renamed and uploaded");
    }
  );
  next();
};

module.exports = { uploadService, handleFileUpload };
