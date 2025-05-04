import multer from "multer";
import path, { dirname, extname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const aleatorio = () => Math.floor(Math.random() * 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}${aleatorio()}${extname(file.originalname)}`);
    }
  })
};
