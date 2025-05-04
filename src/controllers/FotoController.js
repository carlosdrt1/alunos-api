import multer from "multer";
import multerConfig from "../config/multer.js";
import Foto from "../models/Foto.js";

const upload = multer(multerConfig).single("foto");

class FotoController {
  index(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ errors: [err.code] });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({
          nomeOriginal: originalname,
          nomeArquivo: filename,
          aluno_id,
        });
        return res.json(foto);
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
    });
  }
}

export default new FotoController();
