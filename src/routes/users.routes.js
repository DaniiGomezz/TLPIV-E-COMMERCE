import { Router } from 'express';
import { UserService } from '../services/user.service.js';
import { UserController } from '../controllers/user.controller.js';
import { userSchema } from '../models/schemas/user.schema.js';

class UserRoutes {
    static get router() {
        const router = Router();
        const userService = new UserService();
        const userController = new UserController(userService);

        router.post('/register', userSchema, userController.createUser.bind(userController));
        router.post('/auth', userController.loginUser.bind(userController));
        router.get('/', userController.getUsers.bind(userController));
        router.get('/:id', userController.getUserById.bind(userController));
        router.put('/:id', userSchema, userController.updateUser.bind(userController));
        router.delete('/:id', userController.deleteUser.bind(userController));

        return router;
    }
}

export { UserRoutes };