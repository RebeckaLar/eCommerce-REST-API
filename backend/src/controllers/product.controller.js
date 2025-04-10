import Product from '../models/product.model.js'


export const createProduct = async (req, res) => {
    // res.send('skapa')
    const newProduct = await Product.create({
        name: 'Product 1',
        price: 123
    })
    res.json(newProduct)
}