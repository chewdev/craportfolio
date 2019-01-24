import React from "react";

export default function ContactFormError({ error, text }) {
  return error ? <div className="contact-form-error">{text}</div> : null;
}
