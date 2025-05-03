import User from "../models/User.js";

class UserController {
  async create(req, res) {
    try {
      const user = await User.create(req.body);
      const { id, nome, email } = user;
      return res.status(201).json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.json(users);
    } catch (error) {
      console.log(error);
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (error) {
      console.log(error);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      const newUser = await user.update(req.body);
      const { id, nome, email } = newUser;
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

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
