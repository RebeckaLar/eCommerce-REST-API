import Message from '../models/message.model.js'
import mongoose from 'mongoose'

//Meddelanden: 
// Ni ska skapa en separat endpoint där användaren kan skicka ett meddelande med en POST. 
// Där ska ni validera att fälten `name`, `email` & `message` har skickats med. 
// Returnera en status 200 om fälten är korrekt skickade, annars en status 400. 
// Meddelanden behöver inte sparas i databasen.
export const sendMessage = async (req, res) => {
    const { name, email, message } = req.body
    // res.json(newProduct)

    if(!name || !email || !message ) {
        return res.status(400).json({ message: 'Name, email and message are required' })
    }

    const newMessage = await Message.create({ name, email, message })
    console.log( name, email, message)
    // res.status(201).json(newMessage) //Sparas i databasen
    
}