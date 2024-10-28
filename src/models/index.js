import { User } from './User.js';
import { Roles } from './Roles.js';
import { Producto } from './Producto.js';
import { Cart } from './Cart.js';
import { CartItem } from './CartItem.js';
import { Order } from './Order.js';
import { OrderItem } from './OrderItem.js';

class InitModels {
    static init(database) { // usamos static para no tener que crear una instancia de InitModels
        Roles.initModel(database);
        User.initModel(database);
        Producto.initModel(database);
        Cart.initModel(database);
        CartItem.initModel(database);
        Order.initModel(database);
        OrderItem.initModel(database);
    }
}

export { InitModels}