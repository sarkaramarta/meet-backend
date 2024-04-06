import { Users } from "../models/userModel.js";

export const verifiedUser = async (userData) => {
    try {
        let userPhone = await Users.findOne({phone: userData.phone});
        if (!userPhone) {
            return ({status:'error',message:'User Doesnot exist '});
        }
        else {
            return userPhone;
        }
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}