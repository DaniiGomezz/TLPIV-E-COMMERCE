import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import { jsonWebToken } from "../utils/jsonWebToken.js";

class UserService {
    constructor() {
        this.userModel = User; // asignamos el modelo de usuario al servicio
    }

    async create(user) {
        try {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
            const userCreated = await this.userModel.create(user);
            return userCreated;
        } catch (error) {
            throw new Error('error al registrar usuario: ', error);
        }
    }

    async login(username, password) {
        try {
            const user = await this.userModel.findOne({ where: { username } });
            if (!user) {
                throw new Error('usuario no encontrado');
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw new Error('contraseña incorrecta');
            }
            const token = await jsonWebToken.crearJWT({ id: user.id, role: user.role });
            return { user, token };
        } catch (error) {
            throw new Error('error al loguearse: ', error);
        }
    }

    async getAll() {
        try {
            const users = await this.userModel.findAll();
            return users;
        } catch (error) {
            throw new Error('error al obtener usuarios: ', error);
        }
    }

    async getById(id) {
        try {
            const user = await this.userModel.findByPk(id);
            if (!user) {
                throw new Error('usuario no encontrado');
            }
            return user;
        } catch (error) {
            throw new Error('error al obtener usuario: ', error);
        }
    }

    async update(id, updatedData) {
        try {
            const user = await this.getById(id);
            return await user.update(updatedData);
        } catch (error) {
            throw new Error('error al editar usuario: ', error);
        }
    }

    async delete(id) {
        try {
            const user = await this.getById(id);
            await user.destroy();
            return { message: 'usuario eliminado' };
        } catch (error) {
            throw new Error('error al eliminar usuario: ', error);
        }
    }
}

export { UserService }