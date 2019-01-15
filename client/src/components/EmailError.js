import React from "react";

export default function EmailError({ error }) {
  return error ? (
    <div className="contact-form-error">Please input a valid e-mail</div>
  ) : null;
}
