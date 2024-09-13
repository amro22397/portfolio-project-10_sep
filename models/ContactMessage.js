import { model, models, Schema } from "mongoose";

const ContactMessageSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
    },

    email: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: String,
        required: true,
    },

    service: {
        type: String,
        required: true,
    },
  
    message: {
        type: String,
        required: true,
    }
    
}, { timestamps: true });

export const ContactMessage = models?.ContactMessage || model('ContactMessage', ContactMessageSchema);