const nodemailer = require("nodemailer");
// import nodemailer from "nodemailer";

const userGmail = "leandro@gmail.com";
const passAppGmail = "dfgszgdsfgdsfg";

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: userGmail,
    pass: passAppGmail,
  },
});

// Define a route for sending emails
// Set up email options
const mailOptions = {
  from: userGmail,
  to: userGmail,
  subject: "Enviado con Exito!!",
  text: "Te damos la Bienvenida a Email...",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  }
  console.log("Email sent: " + info.response);
});
