import User from "@/models/userModels";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashToken = await bcrypt.hash(userId.toString(), 8);

    // TODO: create email sending functionality
    if (emailType == "VERIFY") {
      await User.findByIdAndUpdate(userId,
        {
          verifyToken: hashToken,
          verifyTokenExpiry: Date.now() + 3600000
        })
    } else if (emailType == "RESET") {
      await User.findByIdAndUpdate(userId,
        {
          forgotPasswordToken: hashToken,
          forgotPasswordTokenExpiry: Date.now() + 3600000
        })
    }

    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "75259763c5335f", // ❌
        pass: "05b985de5b8bbf" // ❌
      }
    });

    const emailOptions = {
      from: 'kamalsharma.microsoft',
      to: email,
      subject: emailType == "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashToken}"> here </a>
       to ${emailType == "VERIFY" ? "Verify your email" : "Reset your password"} 
       or copy and paste the link below your browser.
      </br>
      ${process.env.DOMAIN}/verifyemail?token=${hashToken}
      </p>`,
    }

    const emailResponse = await transport.sendMail(emailOptions);
    (emailOptions)
    return emailResponse;

  } catch (error) {
    console.log(error)
  }
}