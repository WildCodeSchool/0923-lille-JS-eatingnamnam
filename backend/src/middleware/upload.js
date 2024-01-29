// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Chemin de destination des fichiers uploadés
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    // Construire le nom du fichier avec son nom d'origine et l'extension d'origine, autrement le fichier ne possède pas d'extension
    // le Date.now() permet de renommer le fichier afin qu'ils soient tous unique, c'est une façon simple de s'assurer de l'unicité des fichiers
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage });

module.exports = upload;
