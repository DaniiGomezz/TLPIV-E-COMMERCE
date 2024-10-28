import { DataTypes, Model } from 'sequelize';

// carts representa los carritos de compra de los usuarios
class Cart extends Model {
    static initModel(database) {
        Cart.init( 
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                }
            }, {
                sequelize: database.sequelize,
                modelName: 'Cart',
                tableName: 'carts',
                timestamps: true
            }
        )  
    }
}

export { Cart }