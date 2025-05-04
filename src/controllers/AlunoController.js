import Aluno from "../models/Aluno.js";
import Foto from "../models/Foto.js";

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        order: [["id", "DESC"], [Foto, 'id', 'DESC']],
        attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
        include: {
          model: Foto,
          attributes: ["nomeArquivo", "nomeOriginal"]
        }
      });

      res.json(alunos);
    } catch (error) {
      console.log(error);
      res.json(null);
    }
  }

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.status(201).json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, {
        order: [["id", "DESC"], [Foto, 'id', 'DESC']],
        attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
        include: {
          model: Foto,
          attributes: ["nomeArquivo", "nomeOriginal"]
        }
      });

      if (!aluno) {
        return res.status(404).json({ message: "Aluno não encontrado" });
      }

      return res.json(aluno);
    } catch (error) {
      console.error(error);
    }
  }

  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(404).json({ message: "Aluno não encontrado" });
      }

      const newAluno = await aluno.update(req.body);
      res.json(newAluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({ message: "Aluno não encontrado" });
      }

      await aluno.destroy(req.params.id);
      return res.json({ message: "Aluno deletado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AlunoController();
