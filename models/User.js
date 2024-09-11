import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
    },

    email: {
        type: String,
    },

    password: {
        type: String,
    },

    phone: {
        type: String,
    },

    name: {
        type: String,
    },
  
    image: {
        type: String,
    },
    
}, { timestamps: true });

export const User = models?.User || model('User', UserSchema);