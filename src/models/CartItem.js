import { DataTypes, Model } from 'sequelize';

// en cart_items almacenamos los productos y cantidades en cada carrito
class CartItem extends Model {
    static initModel(database) {
        CartItem.init( 
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                quantity: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                }
            }, {
                sequelize: database.sequelize,
                modelName: 'CartItem',
                tableName: 'cart_items',
                timestamps: false
            }
        )  
    }
}

export { CartItem }