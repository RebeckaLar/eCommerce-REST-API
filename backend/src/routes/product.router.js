import express from 'express'
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'
// import { sendMessage } from '../controllers/message.controller.js'

const productRoutes = express.Router()
// const messageRoutes = express.Router()

productRoutes.post('/', createProduct) //CREATE

productRoutes.get('/', getProducts) //READ
productRoutes.get('/:id', getProduct) //READ

productRoutes.put('/:id', updateProduct) //UPDATE
productRoutes.patch('/:id', updateProduct) //UPDATE

productRoutes.delete('/:id', deleteProduct) //DELETE
// messageRoutes.post('/', sendMessage)


export default productRoutes