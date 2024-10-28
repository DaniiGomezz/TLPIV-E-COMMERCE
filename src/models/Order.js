import { DataTypes, Model } from 'sequelize';


// en order registramos las compras realizadas por los usuarios
class Order extends Model {
    static initModel(database) {
        Order.init( 
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                totalAmount: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: false,
                }
            }, {
                sequelize: database.sequelize,
                modelName: 'Order',
                tableName: 'orders',
                timestamps: false
            }
        )  
    }
}

export { Order }