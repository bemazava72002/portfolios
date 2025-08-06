import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Comment from "@/models/comment";

export async function GET() {
  await connectToDatabase();
  const comments = await Comment.find().sort({ date: -1 });
  return NextResponse.json(comments);
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const { name, content } = body;
    if (!name || !content) {
      return NextResponse.json({ message: "Champs manquants" }, { status: 400 });
    }

    const created = await Comment.create({
      name,
      content,
      date: new Date(),
    });

    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
