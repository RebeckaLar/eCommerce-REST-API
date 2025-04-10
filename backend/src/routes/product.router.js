import express from 'express'
import { createProduct } from '../controllers/product.controller.js'

const router = express.Router()

// router.get('/', (req, res) => {
//     res.send('hämta ALLA')
// })
// router.get('/:id', (req, res) => {
//     res.send('hämta EN')
// })

router.post('/', createProduct) //CREATE
router.get('/', () => {}) //READ
router.get('/:id', () => {}) //READ
router.put('/:id', () => {}) //UPDATE
router.patch('/:id', () => {}) //UPDATE
router.delete('/:id', () => {}) //DELETE


export default router