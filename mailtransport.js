const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const keys = require("./config/keys");

// Ref: https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a
const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    keys.GOOGLE_CLIENT_ID,
    keys.GOOGLE_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: keys.GOOGLE_REFRESH
  });

  //TODO: handle reject error with catch
  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject("Failed to create access token");
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: keys.SEND_EMAIL,
      accessToken,
      clientId: keys.GOOGLE_CLIENT_ID,
      clientSecret: keys.GOOGLE_SECRET,
      refreshToken: keys.GOOGLE_REFRESH
    }
  });

  return transporter;
}

const sendEmail = async (emailOptions, callback) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions, callback);
}

const sendMail = ({ email, name, comments, selectOption }, callback) => {
  const mailOptions = {
    from: email,
    to: keys.SEND_EMAIL,
    subject: `Portfolio Inquiry From ${name}`,
    html: `<p><strong>Contact Name:</strong> ${name}</p><p><strong>Contact E-mail:</strong> ${email}</p><p><strong>Reason For Contact:</strong> ${selectOption}</p><p><strong>Comments:</strong> ${comments}</p>`
  };

  // Try to send email with contact form information
  sendEmail(mailOptions, callback);
};

module.exports = { sendMail };
