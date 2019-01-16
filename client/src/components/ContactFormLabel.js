import React from "react";

export default function ContactFormLabel({ text }) {
  return (
    <label className="contact-form-label" htmlFor="contactpurpose">
      {text}
    </label>
  );
}
