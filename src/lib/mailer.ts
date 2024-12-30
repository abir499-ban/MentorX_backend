import * as nodemailer from 'nodemailer'
import dotenv from 'dotenv'



export const sendMail = async (email: string, otp: string) => {

    const transporter = nodemailer.createTransport({
        host: process.env.MAILER_HOST,   
        port: 587,   
        secure: false,
        auth: {
            user: process.env.APP_EMAIL,    
            pass: process.env.APP_PASSWORD,     
        },
    });

    const mailOptions = {
        from: "goyaldanish542@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Verfiy Your Account", // Subject line
        text: "Verfiy Your Account", // plain text body
        html: `<h1> Verify your Account on MentorX</h1>
            <p>
                Your One Time Password to Verify Your Account on Mentor X is
                <p style='font-weight: bold; font-size: 1.2em;'>${otp}</p>
            </p>`, // html body
    }

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent :", info.messageId);


    } catch (error) {
        console.log(error.message)
    }
}