import mongoose from "mongoose";
import { Project } from "../../../models/project";

export async function GET(req) {
    mongoose.connect(process.env.MONGO_URL)
    const url = new URL(req.url);
    const id = url.searchParams.get('_id');

    const project = await Project.findOne({_id: id})
    return Response.json(project);
 }