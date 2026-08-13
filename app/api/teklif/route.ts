import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      name,
      company,
      phone,
      email,
      projectType,
      service,
      message,
    } = data;

    if (!name || !phone || !email || !projectType || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Eksik bilgi var.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Yeni Teklif Talebi - ${name}`,
      text: `
Yeni bir teklif talebi geldi.

Ad Soyad: ${name}
Firma Adı: ${company || "-"}
Telefon: ${phone}
E-posta: ${email}
Proje Türü: ${projectType}
İlgilendiği Hizmet: ${service}

Proje Açıklaması:
${message}
      `,
    });

    console.log(
      "E-posta başarıyla gönderildi:",
      info.messageId
    );

    console.log(
      "SMTP cevabı:",
      info.response
    );

    return NextResponse.json({
      success: true,
      message: "Teklif talebiniz başarıyla gönderildi.",
    });
  } catch (error) {
    console.error("TEKLİF E-POSTA HATASI:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Teklif gönderilirken bir hata oluştu.",
      },
      { status: 500 }
    );
  }
}