import { Router } from 'express';
import { UserRoutes } from './users.routes.js'; 
import { ProductoRoutes } from './producto.routes.js';

const router = Router();

router.use('/users', UserRoutes.router);
router.use('/products', ProductoRoutes.router)

export { router };