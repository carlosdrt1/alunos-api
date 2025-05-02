import { Model, DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

export default class User extends Model {
  static init(sequelize){
    super.init({
      nome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: "Campo nome deve ter entre 3 e 255 caracteres",
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: '',
        unique: {
          msg: "E-mail ja cadastrado na base de dados",
        },
        validate: {
          isEmail: {
            msg: "E-mail inválido",
          }
        }
      },
      password_hash: {
        type: DataTypes.STRING,
        defaultValue: '',
      },
      password: {
        type: DataTypes.VIRTUAL, // Campo que não está na base de dados
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: "A senha precisa ter entre 6 e 50 caracteres",
          }
        }
      },
    }, {
      sequelize
    });

    this.addHook('beforeSave', async user => {
      if(user.password){
        user.password_hash = await bcrypt.hash(user.password, 9);
      }
    });

    return this;
  }

  passwordIsValid(password){
    return bcrypt.compare(password, this.password_hash);
  }
}
