const mysql = require("mysql");
const keys = require("./config/keys");

const connection = mysql.createPool({
  connectionLimit: 10,
  host: keys.DATABASE_HOST,
  user: keys.DATABASE_USER,
  password: keys.DATABASE_PASSWORD,
  database: "portfolio"
});

const checkContactCount = (email, callback) => {
  connection.query(
    "SELECT * FROM submitted_emails WHERE ?",
    {
      email: email
    },
    callback
  );
};

const addContact = ({ name, email, comments, selectOption }, callback) => {
  connection.query(
    "INSERT INTO submitted_emails SET ?",
    {
      full_name: name,
      email: email,
      comments: comments,
      reason: selectOption
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
