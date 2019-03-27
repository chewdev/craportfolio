import React from "react";
import LazyLoad from "react-lazy-load";
import { isEmail } from "validator";
import axios from "axios";
import SuccessfulSubmit from "./SuccessfulSubmit";
import SubmitError from "./SubmitError";
import WhiteboardBottom from "./WhiteboardBottom";
import ContactSelect from "./ContactSelect";
import ContactFormLabel from "./ContactFormLabel";
import ContactFormInput from "./ContactFormInput";
import ErrorLabelDiv from "./ErrorLabelDiv";

export default class Contact extends React.Component {
  constructor() {
    super();
    this.timeout = null;
    this.state = {
      name: "",
      email: "",
      comments: "",
      selectOption: "Say Hi",
      formClass: "",
      submitted: false,
      submitError: false,
      commentCount: 0,
      emailError: false,
      nameError: false,
      hadNameError: false,
      hadEmailError: false,
      contactError: ""
    };
  }

  setName = e => {
    const name = e.target.value;
    return name.length > 50
      ? null
      : this.setState({
          name,
          nameError: this.state.hadNameError && name === ""
        });
  };

  setEmail = e => {
    const email = e.target.value;
    return email.length > 254
      ? null
      : this.setState({
          email,
          emailError: this.state.hadEmailError && !isEmail(email)
        });
  };

  setComments = e => {
    const comments = e.target.value;
    const commentCount = comments.length;
    return commentCount > 255
      ? null
      : this.setState({ comments, commentCount });
  };

  setSelectOption = e => {
    this.setState({ selectOption: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, comments, selectOption } = this.state;
    let emailError = !isEmail(email);
    let nameError = name.length < 1;
    if (nameError || emailError) {
      return this.setState({
        emailError,
        nameError,
        hadEmailError: emailError,
        hadNameError: nameError
      });
    }
    // If valid, set submitted values and begin fading form
    this.setState({ formClass: "fade-away", emailError, nameError });
    // Fading form takes 1 second, hide form after
    this.timeout = setTimeout(() => {
      this.setState({ formClass: "hide-form" });
      this.timeout = null;
    }, 1000);
    // Send input data from contact form to the POST route of '/contact'
    axios
      .post(`/contact`, {
        name,
        email,
        comments,
        selectOption
      })
      .then(res => {
        const { data } = res;
        if (!data.accepted) {
          // If not accepted and contact form hasn't been hidden, cancel timeout and don't hide form
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          // If user's email has already submitted contact form 5 times show error to user
          const contactError = data.alreadysubmitted || "";
          this.setState({ submitError: true, formClass: "", contactError });
        } else {
          // Successfully submit, show success message
          this.setState({ submitted: true, submitError: false });
        }
      })
      .catch(error => {
        // If there's an error, cancel hiding of form in timeout and show submit error
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.setState({ submitError: true, formClass: "" });
      });
  };

  render() {
    return (
      <section id="contact" className="contact-section">
        <SubmitError
          submitError={this.state.submitError}
          contactError={this.state.contactError}
        />
        <LazyLoad offset={600} throttle={25}>
          <>
            <div className={`contact-form`}>
              <SuccessfulSubmit submitted={this.state.submitted} />
              <form
                className={`contact-form-form ${this.state.formClass}`}
                onSubmit={this.onSubmit}
              >
                <h1 className="contact-form-title">Contact</h1>
                <ErrorLabelDiv
                  labelText={"Full Name:"}
                  errorText={"Name is required"}
                  error={this.state.nameError}
                />
                <ContactFormInput
                  value={this.state.name}
                  onChangeProp={this.setName}
                  name={"name"}
                />
                <ErrorLabelDiv
                  labelText={"Email:"}
                  errorText={"Please input a valid e-mail"}
                  error={this.state.emailError}
                />
                <ContactFormInput
                  value={this.state.email}
                  onChangeProp={this.setEmail}
                  name={"email"}
                />
                <ErrorLabelDiv
                  labelText={"Comments:"}
                  errorText={`${255 - this.state.commentCount} characters left`}
                  error={this.state.commentCount > 235}
                />
                <textarea
                  className="contact-form-comments-area"
                  name="comments"
                  id="comments"
                  value={this.state.comments}
                  onChange={this.setComments}
                />
                <ContactFormLabel text={"Reason For Contact:"} />
                <ContactSelect
                  onChangeProp={this.setSelectOption}
                  value={this.state.selectOption}
                />
                <input
                  className="contact-form-submit"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
            <WhiteboardBottom />
          </>
        </LazyLoad>
      </section>
    );
  }
}
