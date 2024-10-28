import { Product } from "../models/Product.js";

class ProductService {
    constructor(){
        this.productModel = Product;
    }

    async create(productData) {
        try {
            const productCreated = await this.productModel.create(productData);
            return productCreated
        } catch (error) {
            console.log('error al crear producto: ', error);
            throw new Error('error al crear producto: ', error);
        }
    }

    async getAll() {
        try {
            const products = await this.productModel.findAll();
            return products;
        } catch (error) {
            throw new Error('error al obtener productos: ', error);
        }
    }

    async getById(id) {
        try {
            const product = await this.productModel.findByPk(id);
            if (!product) {
                throw new Error('producto no encontrado');
            }
            return product;
        } catch (error) {
            throw new Error('error al obtener producto: ', error);
        }
    }

    async update(id, updatedData) {
        try {
            const product = await this.getById(id);
            return await product.update(updatedData);
        } catch (error) {
            throw new Error('Error al actualizar producto: ', error);
        }
    }

    async delete(id) {
        try {
            const product = await this.getById(id);
            await product.destroy();
            return { message: 'producto eliminado' };
        } catch (error) {
            throw new Error('error al eliminar producto: ', error);
        }
    }
}

export { ProductService }