import { DataTypes, Model } from "sequelize";


// en products se detallan los productos y el vendedor asociado
class Producto extends Model {
    static initModel(database) {
        Producto.init(
            {
                productName: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: true
                },
                price: {
                    type: DataTypes.DECIMAL(10, 2),
                    allowNull: false,
                },
                stock: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                }
            }, {
                sequelize: database.sequelize,
                modelName: 'Producto',
                tableName: 'products',
                timestamps: false
            }
        )
    }
}

export { Producto }