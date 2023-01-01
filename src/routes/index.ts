import express from 'express';

import usersRoutes from './user/user.routes';

const router = express.Router();

router.use('/users', usersRoutes);

export default router;
