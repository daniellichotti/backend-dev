import nodemailer from 'nodemailer'
import { configDotenv } from 'dotenv'

configDotenv()

export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})

export async function sendEmail(to, subject, html) {
    try {
        const info = await transporter.sendMail({
            from: `"Meu App" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        })

        console.log('Email enviado: ', info.messageId)
    } catch (error) {
        console.log('Erro ao enviar o email: ', error)
    }
}