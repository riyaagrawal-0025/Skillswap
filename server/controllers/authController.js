import User from "../models/User.js";

const registerUser = async(req,res) =>{
    const {name, email, password,skills} = req.body;
    try{
        const userExist = await User.findOne({email});
        if(userExist){ 
            return res.status(400).json({message: "User already exist"});

        }
        const user = await User.create({
            name,
            email,
            password,
            skills
        });
        res.status(201).json(user);

    }   
    catch(error){
        res.status(500).json({message: error.message});

    }
};

export default registerUser;