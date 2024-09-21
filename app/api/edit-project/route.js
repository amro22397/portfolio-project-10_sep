import mongoose from "mongoose";
import { Project } from "../../../models/project";

export async function PUT(req) {
    mongoose.connect(process.env.MONGO_URL)

    const {id, ...data} = await req.json();

    await Project.findByIdAndUpdate(id, data);
    return Response.json(true);
 }