import React from "react";
import ContactFormLabel from "./ContactFormLabel";
import ContactFormError from "./ContactFormError";

export default function ErrorLabelDiv({ errorText, labelText, error }) {
  return (
    <div className="contact-form-label-error-div">
      <ContactFormLabel text={labelText} />
      <ContactFormError error={error} text={errorText} />
    </div>
  );
}
