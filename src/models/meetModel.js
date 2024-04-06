import mongoose from "mongoose";

const meetSchema = new mongoose.Schema({
    meetId :{
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
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