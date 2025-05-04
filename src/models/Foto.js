import { Model, DataTypes } from "sequelize";
import appConfig from "../config/appConfig.js";

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      nomeOriginal: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: "Campo nome original não pode ficar vazio"
          }
        }
      },
      nomeArquivo: {
        type: DataTypes.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: "Campo nome do arquivo não pode ficar vazio"
          }
        }
      },
      url: {
        type: DataTypes.VIRTUAL,
        get(){
          return `${appConfig.url}/images/${this.getDataValue('nomeArquivo')}`;
        }
      }
    }, {
      sequelize
    });
    return this;
  }

  static assossiate(models){
    this.belongsTo(models.Aluno, {foreignKey: "aluno_id"});
  }
}
