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

    technologiesArray: {
        type: Array,
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
    },
    youtubeLink: {
        type: String,
    },
    
    
}, { timestamps: true });

export const Project = models?.Project || model('Project', ProjectSchema);