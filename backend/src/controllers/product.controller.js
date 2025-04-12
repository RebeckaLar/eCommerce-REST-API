import Product from '../models/product.model.js'
import mongoose from 'mongoose'

// export const createProduct = async (req, res) => {
//     // res.send('skapa')
//     const newProduct = await Product.create({
//         name: 'Product 1',
//         price: 123
//     })
//     res.json(newProduct)
// }

export const createProduct = async (req, res) => {
    const { name, price } = req.body

    if(!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' })
    }

    const newProduct = await Product.create({ name, price })
    res.status(201).json(newProduct)
}

export const getProducts = async (req, res) => {
    const products = await Product.find().exec()

    res.status(200).json(products)
}

export const getProduct = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "invalid id" })
    }

    const product = await Product.findById(id).exec()
    if(!product) {
        return res.status(404).json({ message: `Can't find what you are looking for` })
    }
    res.status(200).json(product)
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { name, price } = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "invalid id" })
    }

    const toUpdate = {}
    if(name) toUpdate.name = name
    if(price) toUpdate.price = price

    if(Object.keys(toUpdate).length === 0) {
        res.status(400).json({ message: "No changes provided"})
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, toUpdate, { new: true}).exec()
    if(!updatedProduct) {
        return res.status(404).json({ message: `Can't find that article`})
    }
    res.status(200).json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "invalid id" })
    }

    const product = await Product.findByIdAndDelete(id).exec()
    if(!product) {
        return res.status(404).json({ message: `Can't find that article`})
    }
    res.status(204).json(product)
}

