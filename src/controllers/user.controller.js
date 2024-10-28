

class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async createUser(req, res) {
        try {
            const user = await this.userService.create(req.body);
            res.status(201).json({ message: 'usuario registrado', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async loginUser(req, res) {
        try {
            const { username, password } = req.body
            const { user, token } = await this.userService.login(username, password)
            res.status(200).json({ message: `logueado correctamente`, user, token });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await this.userService.getAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await this.userService.getById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await this.userService.update(req.params.id, req.body);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            await this.userService.delete(req.params.id);
            res.status(200).json({ message: 'usuario eliminado' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export { UserController };