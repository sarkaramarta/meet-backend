import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id :{
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        default: 25
    },
    gender: {
        type: String
    }
});

const Users = mongoose.model('users', userSchema);
export{Users};