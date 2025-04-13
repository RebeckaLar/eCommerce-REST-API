import express from 'express'
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'

const productRoutes = express.Router()

productRoutes.post('/', createProduct) //CREATE

productRoutes.get('/', getProducts) //READ
productRoutes.get('/:id', getProduct) //READ

productRoutes.put('/:id', updateProduct) //UPDATE
productRoutes.patch('/:id', updateProduct) //UPDATE

productRoutes.delete('/:id', deleteProduct) //DELETE


export default productRoutes