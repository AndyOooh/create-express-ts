console.log('inside app-config');
import { FRONTEND_URL } from './VARS.js';

export const corsConfig = {
  origin: [FRONTEND_URL, 'http://localhost:3000'],
  // credentials: true,
  // methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], //notice OPTIONS not needed for preflight req to pass
  // allowedHeaders: ['Access-Control-Allow-Origin', 'Origin', 'Content-Type', 'Authorization'],
};
