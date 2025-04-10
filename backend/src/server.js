// server.js ansvarsområden: 
// - koppla upp den server
// - koppla upp sig mot vår databas

import app from "./app.js";
import mongoose from 'mongoose'

const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI

const dbConnect = async () => {
    try {
        const mongo = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB Connected: ${mongo.connection.host}`)
    } catch (error) {
        console.log(`MongoDB Connection Error: ${error.message}`)
        process.exit(1)
    }
}

const startServer = async () => {
    await dbConnect()
    try {
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
    } catch (error) {
        console.log('Failed to start server: '+ error.message)
        process.exit(1)
    }
}

startServer()