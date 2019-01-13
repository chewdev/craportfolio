import React from "react";

export default function SubmitError({ submitError, contactError }) {
  return submitError ? (
    <h3 className="contact-error">
      {contactError
        ? contactError
        : "There was an error submitting the form, please try again."}
    </h3>
  ) : null;
}
