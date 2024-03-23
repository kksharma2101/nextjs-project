import User from "@/models/userModels";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashToken = await bcrypt.hash(userId.toString(), 8);
    // TODO: create email sending functionality
    if (emailType == "VERIFY") {
      await User.findByIdAndUpdate(userId, { verifyToken: hashToken, verifyTokenExpiry: Date.now() + 3600 })
    } else if (emailType == "RESET") {
      await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashToken, forgotPasswordTokenExpiry: Date.now() + 36000 })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const emailOptions = {
      from: 'kamalsharma.microsoft', // sender address
      to: email, // list of receivers
      subject: emailType == "VERIFY" ? "Verify your email" : "Reset your password", // Subject line
      html: "<b>Hello world?</b>", // html body
    }

    const emailResponse = await transporter.sendMail(emailOptions);
    (emailOptions)
    return emailResponse;

  } catch (error) {
    console.log(error)
  }
}