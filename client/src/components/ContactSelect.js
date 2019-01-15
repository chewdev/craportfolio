import React from "react";

const options = [
  {
    value: "Say Hi",
    text: "Say Hi"
  },
  {
    value: "Let's Chat",
    text: "Let's Chat"
  },
  {
    value: "Freelance Work",
    text: "Freelance Opportunity"
  },
  {
    value: "Job Opportunity",
    text: "Job Opportunity"
  }
];

export default function ContactSelect({ onChangeProp, value }) {
  return (
    <select
      onChange={onChangeProp}
      value={value}
      className="contact-form-contactinput"
      name="contactpurpose"
    >
      {options.map(option => (
        <option
          className="contact-form-reason-option"
          value={option.value}
          key={option.value}
        >
          {" "}
          {option.text}{" "}
        </option>
      ))}
    </select>
  );
}
