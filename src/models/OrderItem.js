import { DataTypes, Model } from 'sequelize';

// en order_items detallamos los productos y cantidades en cada orden
class OrderItem extends Model {
    static initModel(database) {
        OrderItem.init( 
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                quantity: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                price: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: false
                }
            }, {
                sequelize: database.sequelize,
                modelName: 'OrderItem',
                tableName: 'order_items',
                timestamps: false
            }
        )  
    }
}

export { OrderItem }