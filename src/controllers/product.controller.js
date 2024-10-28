
class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async createProduct(req, res) {
        try {
            const productData = req.body;
            const newProduct = await this.productService.create(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
            console.log('error al crear producto: ', error)
        }
    }

    async getProducts(req, res) {
        try {
            const products = await this.productService.getAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getProductById(req, res) {
        try {
            const product = await this.productService.getById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const updatedProduct = await this.productService.update(req.params.id, req.body);
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            await this.productService.delete(req.params.id);
            res.status(200).json({ message: 'producto eliminado' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

export { ProductController }