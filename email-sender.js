const nodemailer = require("nodemailer");

// Create a transporter with your email service details
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., "Gmail" for Gmail
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
  text: "This is a test email sent from Node.js.",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email: " + error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
