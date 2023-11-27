import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Tudo certo' });
});

export default routes;

