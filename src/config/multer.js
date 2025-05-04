import multer from "multer";
import path, { dirname, extname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const aleatorio = () => Math.floor(Math.random() * 10000);

// multer({
//   fileFilter: (req, file, callback){
//     file.mimetype()
//   }
// })

export default {
  fileFilter: (req, file, callback) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
      return callback(new multer.MulterError('Arquivo precisa ser PNG ou JPEG'));
    }
    return callback(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "uploads", "images"));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}${aleatorio()}${extname(file.originalname)}`);
    }
  })
};
