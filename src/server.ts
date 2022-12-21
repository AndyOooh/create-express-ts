import express from 'express';
import cors from 'cors';

import { NODE_ENV, PORT } from './configs/VARS';
import apiRoutes from './routes/index.routes.js';


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, environmant: (${NODE_ENV})`);
});
