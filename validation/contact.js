const Validator = require("validator");
const isEmpty = require("./is-empty");
const stringForValid = require("./string-for-valid");

module.exports = function validateContactInput(data) {
  let errors = {};

  if (typeof data !== "object") {
    errors.isJSON = false;
    return {
      errors,
      isValid: false
    };
  }

  let { name, email, comments, selectOption } = data;

  name = stringForValid(name);
  email = stringForValid(email);
  comments = stringForValid(comments);
  selectOption = stringForValid(selectOption);

  if (!Validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isLength(name, { min: 1, max: 50 })) {
    errors.name = "Name must be 50 characters or less";
  }

  if (Validator.isEmpty(name)) {
    errors.name = "Name is required";
  }

  if (Validator.isEmpty(selectOption)) {
    errors.select = "An option must be selected";
  }

  if (
    !["Say Hi", "Let's Chat", "Freelance Work", "Job Opportunity"].includes(
      selectOption
    )
  ) {
    errors.select = "That is not a valid option";
  }

  if (comments) {
    if (!Validator.isLength(comments, { min: 1, max: 255 })) {
      errors.comments = "Comments must be 255 characters or less";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
