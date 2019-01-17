const nodemailer = require("nodemailer");
const keys = require("./config/keys");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: keys.SEND_EMAIL,
    clientId: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_SECRET,
    refreshToken: keys.GOOGLE_REFRESH,
    accessToken: keys.GOOGLE_ACCESS
  },
  tls: {
    rejectUnauthorized: false
  }
});

const sendMail = ({ email, name, comments, selectOption }, callback) => {
  const mailOptions = {
    from: email,
    to: keys.SEND_EMAIL,
    subject: `Portfolio Inquiry From ${name}`,
    html: `<p><strong>Contact Name:</strong> ${name}</p><p><strong>Contact E-mail:</strong> ${email}</p><p><strong>Reason For Contact:</strong> ${selectOption}</p><p><strong>Comments:</strong> ${comments}</p>`
  };

  // Try to send email with contact form information
  transporter.sendMail(mailOptions, callback);
};

module.exports = { transporter, sendMail };
