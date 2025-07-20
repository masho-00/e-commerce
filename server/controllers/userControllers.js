import { token } from "morgan";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const existingUser = await User.findOne({email})
        if(existingUser){
            res.status(400).json({msg: 'user already exists!'})
        }
        const user = new User.create({name, email, password});  
        res.status(201).json({
            _id: user._id,
            name: user.nmae,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })    
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:"server error"})
    }
};

const authUser =async (req, res) => {
    const {email, password}= req.body;
    try {
        const user = await User.findOne({email})
        if(user && (await user.matchPassword(password))){
           res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })  
        }
        res.status(401).json({msg: 'Invalid email or password'})
       
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'server error'})
    }
}

export {registerUser, authUser}