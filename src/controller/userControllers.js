import { verifiedUser } from "../services/userServices.js";

export const verifyUserHandler = async(req,res) => {
    let userData = req.body;
    
    try {
        let verifyUser = await verifiedUser(userData);
        if(verifyUser){
            res.send({message: 'user created successfully', data: verifyUser}); 
            console.log(verifyUser);
        }
        
    }
    catch (err) {
        res.status(500).send({message: 'user creation failed',err});
    }
    
}