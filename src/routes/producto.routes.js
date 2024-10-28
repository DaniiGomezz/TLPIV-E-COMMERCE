import { Router } from 'express';
import { ProductService } from '../services/producto.service.js';
import { ProductController } from '../controllers/producto.controller.js';
// import { authMiddleware } from '../middlewares/autenticacion.js';
// import { authorizeRoles } from '../middlewares/authorizeRoles.js';
// import { ROLES } from '../constants/roles.js';

class ProductoRoutes {
    static get router() {
        const router = Router();
        const productService = new ProductService();
        const productController = new ProductController(productService);

        router.post('/', productController.createProduct.bind(productController));
        router.get('/', productController.getProducts.bind(productController));
        router.get('/:id', productController.getProductById.bind(productController));
        router.put('/:id', productController.updateProduct.bind(productController));
        router.delete('/:id', productController.deleteProduct.bind(productController));

        return router;
    }
}

export { ProductoRoutes };