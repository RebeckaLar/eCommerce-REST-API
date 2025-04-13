import Product from '../models/product.model.js'
import mongoose from 'mongoose'

//CREATE
export const createProduct = async (req, res) => {
    const { name, price, description, category, images } = req.body

    if(!name || !price || !description || !category || !images) {
        return res.status(400).json({ message: 'Name, price, description, category and images are required' })
    }

    const newProduct = await Product.create({ name, price, description, category, images })
    res.status(201).json(newProduct)
}

export const getProducts = async (req, res) => {
    const products = await Product.find().exec()

    res.status(200).json(products)
}

//READ
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

//UPDATE
export const updateProduct = async (req, res) => {
    const { id } = req.params
    const { name, price, description, category, images } = req.body
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "invalid id" })
    }

    const toUpdate = {}
    if(name) toUpdate.name = name
    if(price) toUpdate.price = price
    if(description) toUpdate.description = description
    if(category) toUpdate.category = category
    if(images) toUpdate.images = images

    if(Object.keys(toUpdate).length === 0) {
        res.status(400).json({ message: 'No changes provided' })
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, toUpdate, { new: true }).exec()
    if(!updatedProduct) {
        return res.status(404).json({ message: `Can't find that article` })
    }
    res.status(200).json(updatedProduct)
}

//DELETE
export const deleteProduct = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid id' })
    }

    const product = await Product.findByIdAndDelete(id).exec()
    if(!product) {
        return res.status(404).json({ message: `Can't find that article` })
    }
    res.status(204).json(product)
}

