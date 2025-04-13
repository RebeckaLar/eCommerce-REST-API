//app.js handles all routes and defines the Express-app
import express from 'express'
import productRoutes from './routes/product.router.js'
import messageRoutes from './routes/message.route.js'
import { errorHandler, notFound } from './middlewares/error.middleware.js'

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/message', messageRoutes)

app.use(notFound) 
app.use(errorHandler) 

export default app