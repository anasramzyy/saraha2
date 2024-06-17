import nodemailer from "nodemailer"

export const sendEmail = async ({ to, subject, html }) => {
  // sender info 
  const transport = nodemailer.createTransport({
    host: "localhost",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  })

  // receiver info
  const emailInfo = await transport.sendMail({
    from:`"Ramzy Company" <${process.env.EMAIL}>`,
    to,
    subject,
    html,
  })

  if(emailInfo.accepted.length > 0) {
    return true
  }

  return false
}
