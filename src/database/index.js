// esse arquivo que realiza a conexao com o db e carrega as models
import Sequelize from 'sequelize'; // responsavel por faze ra conexao com o banco
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    // faz a conexao com o banco e carrega as models
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection)) // percorrendo todos os models
      .map(model => model.associate && model.associate(this.connection.models)); // só vai executar o segundo model.associate se o primeiro for verdade, ou seja se existir o associate dentro do model
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
