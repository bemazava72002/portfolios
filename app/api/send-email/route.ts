// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, subject, message, budget } = body;

    await resend.emails.send({
      from: `Portfolio Contact <${process.env.EMAIL_FROM as string}>`, // ton email vérifié chez Resend
      to: process.env.EMAIL_TO as string, // l'email où tu veux recevoir les messages
      replyTo: email, // permet de répondre directement au visiteur
      subject: `Demande de contact : ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>Nouvelle demande de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Entreprise :</strong> ${company || 'Non précisé'}</p>
          <p><strong>Budget :</strong> ${budget || 'Non précisé'}</p>
          <p><strong>Message :</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur Resend:', error);
    return NextResponse.json({ success: false, error });
  }
}
