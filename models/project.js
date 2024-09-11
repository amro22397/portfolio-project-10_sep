import { model, models, Schema } from "mongoose";

const ProjectSchema = new Schema({
    title: {
        type: String,
    },

    description: {
        type: String,
    },

    technologies: {
        type: String,
    },

    link: {
        type: String,
    },

    date: {
        type: String,
    },
  
    category: {
        type: String,
    },

    imageUrls: {
        type: Array,
    }
    
}, { timestamps: true });

export const Project = models?.Project || model('Project', ProjectSchema);