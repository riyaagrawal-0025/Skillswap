import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exist' });

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "user registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.find({ email });
        if (!user) {
            res.status(404).json({ "Message": "User does not exist!! Please signup!!" })
        }
        const isPasswordSame = await bcrypt.compare(user.password, password);
        if (!isPasswordSame) {
            res.status(403).json({ 'Message': 'Invalid Password!!' })
        }
        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ 'Message': "Signed in successfully", token })
    } catch (error) {
        console.log('Error in signin', error);
        res.status(500).json({ 'Message': "Internal Server Error in signing in user!!" })
    }
})