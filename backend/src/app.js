// app.js ansvarsområden: 
// - hantera och ta in alla våra routers
// - definierar express-appen
import express from 'express'
import productRoutes from './routes/product.router.js'

const app = express()

app.use('/api/products', productRoutes)

export default app