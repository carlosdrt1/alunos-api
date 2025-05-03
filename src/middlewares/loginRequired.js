import jwt from "jsonwebtoken";
import User from "../models/User.js";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      errors: ["Login requerido"],
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const dados = jwt.verify(token, process.env.TOKEN_S);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id,
        email,
      }
    });

    if(!user){
      return res.status(401).json({ errors: ["Usuário inválido"] });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    console.error("Erro na verificação do token: " + error.message);
    return res.status(401).json({ errors: ["Token expirado, ou inválido"] });
  }
};
