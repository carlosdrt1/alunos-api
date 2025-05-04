import multer from "multer";
import multerConfig from "../config/multer.js";

const upload = multer(multerConfig).single("foto");

class FotoController {
  async index(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }
      return res.json(req.file);
    });
  }
}

export default new FotoController();
