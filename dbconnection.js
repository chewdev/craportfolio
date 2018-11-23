const mysql = require("mysql");
const keys = require("./config/keys");

const connection = mysql.createPool({
  connectionLimit: 10,
  host: keys.DATABASE_HOST,
  user: keys.DATABASE_USER,
  password: keys.DATABASE_PASSWORD,
  database: "portfolio"
});

const checkContactCount = (submittedEmail, callback) => {
  connection.query(
    "SELECT * FROM submitted_emails WHERE ?",
    {
      email: submittedEmail
    },
    callback
  );
};

const addContact = (
  { submittedName, submittedEmail, submittedComments, submittedSelectedOption },
  callback
) => {
  connection.query(
    "INSERT INTO submitted_emails SET ?",
    {
      full_name: submittedName,
      email: submittedEmail,
      comments: submittedComments,
      reason: submittedSelectedOption
    },
    callback
  );
};

const getIntroQuestions = callback => {
  connection.query(
    "SELECT question, answer, search_terms FROM intro_questions",
    callback
  );
};

module.exports = {
  connection,
  checkContactCount,
  addContact,
  getIntroQuestions
};
