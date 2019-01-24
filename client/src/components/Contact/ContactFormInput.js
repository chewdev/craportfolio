import React from "react";

export default function ContactFormInput({ value, onChangeProp, name }) {
  return (
    <div className="contact-form-input-div">
      <input
        className="contact-form-contactinput"
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChangeProp}
      />
    </div>
  );
}
