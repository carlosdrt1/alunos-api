import User from "../models/User.js";

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.status(201).json(novoUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      return res.json(user);
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ message: "Faltando identificador" });
      }
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      const newUser = await user.update(req.body);

      return res.json(newUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ message: "Faltando identificador" });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      await user.destroy(req.params.id);
      return res.json({ message: "Usuário deletado com sucesso" });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
