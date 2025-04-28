import Aluno from "../models/Aluno.js";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Carlos",
      sobrenome: "Duarte",
      email: "carlos@gmail.com",
      idade: 20,
      peso: 230,
      altura: 2.1
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
