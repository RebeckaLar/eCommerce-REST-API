import Message from '../models/message.model.js'

export const sendMessage = async (req, res) => {
    const { name, email, message } = req.body

    if(!name || !email || !message ) {
        return res.status(400).json({ message: 'Name, email and message are required' })
    }

    //Validate email
    let validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validRegex.test(email)) {
        console.log(email)
        return res.status(400).json({ message: 'You need to enter a valid email-adress' })
    }

    const newMessage = await Message.create({ name, email, message })
    console.log(newMessage)
    // res.status(201).json(newMessage) //Saves message to database
    
}