// app.js ansvarsområden: 
// - hantera och ta in alla våra routers
// - definierar express-appen
import express from 'express'
import productRoutes from './routes/product.router.js'
import messageRoutes from './routes/message.route.js'
import { errorHandler, notFound } from './middlewares/error.middleware.js'

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/message', messageRoutes)

app.use(notFound) //notFound
app.use(errorHandler) //errorHandler

export default app