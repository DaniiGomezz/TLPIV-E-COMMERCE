import { DataTypes, Model } from "sequelize";

// definimos roles del usuario (admin, vendedor, cliente)
class Roles extends Model {
    static initModel(database) {
        Roles.init(
            {
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                }
            }, {
                sequelize: database.sequelize,
                modelName: 'Roles',
                tableName: 'roles',
                timestamps: false
            }
        )
    }
}

class InsertRoles {
    constructor() { 
        this.insertRoles()
    }
    static async insertRoles() {
        const roles = await Roles.bulkCreate([
            { name: 'admin' },
            { name: 'vendedor' },
            { name: 'cliente' }
        ]);
    }
}


export { Roles, InsertRoles }

