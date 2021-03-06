const http = require("http");
const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "client", "build");

const port = process.env.PORT || 5000;

const {
  checkContactCount,
  addContact,
  getIntroQuestions
} = require("./dbconnection");

let { sendMail } = require("./mailtransport");

const validateContactInput = require("./validation/contact");

app.use(function(req, res, next) {
  let data = "";
  req.setEncoding("utf8");
  req.on("data", function(chunk) {
    data += chunk;
  });

  req.on("end", function() {
    req.body = data;
    next();
  });
});

app.use(express.static(publicPath));

app.post("/contact", (req, res) => {
  let data = {};
  // If data received in body is not JSON object
  // catch error and return
  try {
    data = JSON.parse(req.body);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ isJSON: false, accepted: false });
  }

  const { errors, isValid } = validateContactInput(data);

  // Received invalid input
  if (!isValid) {
    console.log(errors);
    return res.status(400).json({ ...errors, accepted: false });
  }

  // Data received is valid
  // Users can only send 5 contact requests, check if limit reached
  const countCallback = function(err, results) {
    // If user has already contacted 5 times, return error
    if (results && results.length > 4) {
      return res.status(400).json({
        alreadysubmitted:
          "You have submitted a contact too many times, please contact directly.",
        accepted: false
      });
    }

    // Valid new enquiry, insert into database
    addContact(data, function(err, results) {
      // Error inserting into DB
      // Log error then attempt to send email
      if (err) {
        console.log(err);
      }
    });
    // Send email
    sendMail(data, function(err, data) {
      // Error sending email
      if (err) {
        console.log(err);
        return res.status(400).json({ mailnotsent: "Unable to send email" });
      }
      // Email successfully sent
      else {
        const accepted = !!data.accepted;
        return res.json({ accepted });
      }
    });
  };

  checkContactCount(data.email, countCallback);
});

app.get("/questions", (req, res) => {
  getIntroQuestions(function(error, results, fields) {
    if (error) {
      console.log(error);
      res.status(400).json([
        {
          question: "Why aren't there more questions?",
          search_terms:
            "why are there not more questions what how when if can you",
          answer:
            "We are currently having issues reaching Chris. Please try refreshing the page to ask other questions."
        }
      ]);
      return;
    }
    res.json(results);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

if (process.env.NODE_ENV === "production") {
  const httpServer = http.createServer(app);
  httpServer.listen(port, () => {
    console.log("HTTP Server running on port " + port);
  });
} else {
  app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
  });
}
