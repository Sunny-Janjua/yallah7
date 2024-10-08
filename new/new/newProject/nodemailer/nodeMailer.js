// utils/sendEmail.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST || 'smtp.ethereal.email',
//   port: process.env.SMTP_PORT || 587,
//   auth: {
//     user: process.env.SMTP_USER || 'coralie2@ethereal.email',
//     pass: process.env.SMTP_PASS || '4PMvNrunNygyvYhPsP',
//   },
// });

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'ada.mcglynn@ethereal.email',
      pass: 'nM7D21U2xpMNcEEKR1'
  }
});

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Code With Sunny 👻" <${process.env.EMAIL_FROM || 'hussnainmulazam@gmail.com'}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Message sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
