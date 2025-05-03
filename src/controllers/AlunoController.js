import Aluno from "../models/Aluno.js";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
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
}

export default new AlunoController();
