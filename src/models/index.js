import { Sequelize } from 'sequelize';
import { config } from '../config/database.js';
import User from './User.js';

// Cria a instância do Sequelize com as configurações
const sequelize = new Sequelize(config);

// Inicializa o modelo User
User.init(sequelize);

// Sincroniza os modelos com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Tabelas sincronizadas.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error);
  });

export { sequelize, User };
