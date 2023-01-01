import 'dotenv/config';

export const { NODE_ENV, PORT, FRONTEND_URL_DEV, FRONTEND_URL_PROD } = process.env;

export const frontendUrl = NODE_ENV === 'production' ? FRONTEND_URL_PROD as string : FRONTEND_URL_DEV as string;

export * from './cors';
