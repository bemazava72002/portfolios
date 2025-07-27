import { Schema, models, model } from "mongoose";

const TestimonialSchema = new Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    role: { type: String, required: true },
    content: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default models.Testimonial || model("Testimonial", TestimonialSchema);
