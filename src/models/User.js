import { DataTypes, Model } from 'sequelize';


// en users almacenamos la información de los usuarios incluyendo su rol (admin, vendedor, cliente)
class User extends Model {
    static initModel(database) { // static porque no requerimos una instancia de User para ejecutar el método
        User.init( 
            {
                username: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
            }, {
                sequelize: database.sequelize, // instancia de Sequelize
                modelName: 'User',
                tableName: 'users',
                timestamps: false
            }
        )  
    }
}

class InsertUsers {
    constructor() { 
        this.insertUsers()
    }
    static async insertUsers() {
        const usuarios = await User.bulkCreate([
            { username: 'Roque', email: 'Roque@gmail.com', password: '123456', id_role: 1 },
            { username: 'Lucas1' , email: 'Martin@gmail.com', password: '123456', id_role: 2 },
            { username: 'Ezequiel', email: 'Ezequiel@gmail.com', password: '123456', id_role: 3 }
        ]);
    }
}
 

export { User, InsertUsers }