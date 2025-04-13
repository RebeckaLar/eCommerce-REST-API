import express from 'express'
import { sendMessage } from '../controllers/message.controller.js'

const messageRoutes = express.Router()

messageRoutes.post('/', sendMessage)


export default messageRoutes