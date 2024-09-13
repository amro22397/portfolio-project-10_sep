import mongoose from "mongoose";
import { ContactMessage } from "../../../models/ContactMessage";

export async function POST(req) {
    mongoose.connect(process.env.MONGO_URL)
    const body = await req.json();

    const contactMessage = await ContactMessage.create(body);

    return Response.json(contactMessage);

}