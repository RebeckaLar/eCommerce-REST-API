import express from 'express'
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js'

const router = express.Router()

// router.get('/', (req, res) => {
//     res.send('hämta ALLA')
// })
// router.get('/:id', (req, res) => {
//     res.send('hämta EN')
// })

router.post('/', createProduct) //CREATE

router.get('/', getProducts) //READ
router.get('/:id', getProduct) //READ

router.put('/:id', updateProduct) //UPDATE
router.patch('/:id', updateProduct) //UPDATE

router.delete('/:id', deleteProduct) //DELETE


export default router