import express from 'express';
import cors from 'cors';

import apiRoutes from './routes';
import { corsConfig } from './configs';

export const app = express();

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRoutes);
