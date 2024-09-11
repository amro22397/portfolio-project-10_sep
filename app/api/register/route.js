import { User } from "@/models/User";
import mongoose from "mongoose";

export async function POST(req) {
    mongoose.connect(process.env.MONGO_URL)
    const body = await req.json();

    const user = await User.create(body);

    return Response.json(user);

}