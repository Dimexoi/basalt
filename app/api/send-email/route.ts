import { error } from "console";
import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'


export async function POST(req: Request) {
  try {
    const body = await req.json()
    const message = {
      from: body.email,
      to: process.env.RECEIVER_EMAIL_ADDR,
      subject: `Formulaire site : ${body.nom} ${body.prenom} - ${body.societe}`,
      text: body.message,
      html: `<p>Nom : ${body.nom} | Prenom : ${body.prenom} | Téléphone : ${body.telephone} | Email : ${body.email} | Société : ${body.societe}</p><p>${body.message}</p>`,
    };
    
    let transporter = nodemailer.createTransport({
      host: "ssl0.ovh.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL_ADDR,
        pass: process.env.SENDER_EMAIL_PASSWORD,
      },
    });

    const emailResult = transporter.sendMail(message, (err, info) => {
      if (err) {
        return err.cause
      } else {
        return info.accepted
      }
    })
    return NextResponse.json({
      message: emailResult
  });

  } catch (err) {
    console.log(err)
    return NextResponse.json({error: err})
  }
}