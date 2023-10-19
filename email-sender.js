const nodemailer = require("nodemailer");

// Creating a transporter with  email service details
const transporter = nodemailer.createTransport({
  service: "Gmail", 
  auth: {
    user: "odera7070@gmail.com",
    pass: "xsna oprz xcqx kvho",
  },
  tls: {
    rejectUnauthorized: false,
  }
});

// Email data
const mailOptions = {
  from: "odera7070@gmail.com",
  to: "odera7070@gmail.com",
  subject: "Node.js Email Test",
  text: "Hello there! from Node.js.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email: " + error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
