import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Testimonial from "@/models/Testimonials";

export async function GET() {
  await connectToDatabase();
  const testimonials = await Testimonial.find().sort({ date: -1 });
  return NextResponse.json(testimonials);
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const { name, company, role, content, rating } = body;
    if (!name || !company || !role || !content || !rating) {
      return NextResponse.json({ message: "Champs manquants" }, { status: 400 });
    }

    const created = await Testimonial.create({
      name,
      company,
      role,
      content,
      rating,
      date: new Date(),
    });

    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
