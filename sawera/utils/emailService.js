import nodemailer from 'nodemailer';

// Send OTP via email
export const sendOTP = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',  // or another service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);
};