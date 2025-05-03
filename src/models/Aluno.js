import { Model, DataTypes } from "sequelize";

export default class Aluno extends Model {
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
      sobrenome: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: "Campo sobrenome deve ter entre 3 e 255 caracteres",
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
      idade: {
        type: DataTypes.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: "Idade precisa ser um número inteiro"
          }
        }
      },
      peso: {
        type: DataTypes.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: "Peso precisa ser um número inteiro, ou ponto flutuante"
          }
        }
      },
      altura: {
        type: DataTypes.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: "Altura precisa ser um número inteiro, ou ponto flutuante"
          }
        }
      }
    }, { sequelize });
    return this;
  }
}
