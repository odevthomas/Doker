import express from 'express';
import routes from './routes.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/usuarios', routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta ${PORT}`);
  });
}).catch((error) => {
  console.error('Erro ao conectar com o banco:', error);
});
