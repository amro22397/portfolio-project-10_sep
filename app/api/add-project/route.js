import { Project } from "../../../models/project.js";
import mongoose from "mongoose";

export async function POST(req) {
    mongoose.connect(process.env.MONGO_URL)
    const body = await req.json();

    const project = await Project.create(body);

    return Response.json(project);

}