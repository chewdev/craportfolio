import React from "react";
import LazyLoad from "react-lazy-load";
import { isEmail } from "validator";
import axios from "axios";
import SuccessfulSubmit from "./SuccessfulSubmit";
import SubmitError from "./SubmitError";
import WhiteboardBottom from "./WhiteboardBottom";
import ContactSelect from "./ContactSelect";

export default class Contact extends React.Component {
  constructor() {
    super();

    this.timeout = null;

    this.state = {
      contactName: "",
      contactEmail: "",
      comments: "",
      selectedoption: "",
      submittedName: "",
      submittedEmail: "",
      submittedComments: "",
      submittedSelectedOption: "",
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

    this.setContactName = this.setContactName.bind(this);
    this.setContactEmail = this.setContactEmail.bind(this);
    this.setComments = this.setComments.bind(this);
    this.setSelectOption = this.setSelectOption.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setContactName(e) {
    const contactName = e.target.value;
    // Name must be less than 50 chars
    if (contactName.length > 50) {
      return;
    }

    if (this.state.hadNameError && contactName === "") {
      this.setState({ contactName, nameError: true });
      return;
    }

    this.setState({ contactName, nameError: false });
  }

  setContactEmail(e) {
    const contactEmail = e.target.value;
    // Emails must be less than 254 chars
    if (contactEmail.length > 254) {
      return;
    }
    // If user tried to submit an invalid email and current input is invalid
    // Show email error message
    if (this.state.hadEmailError && !isEmail(contactEmail)) {
      this.setState({ contactEmail, emailError: true });
      return;
    }

    // Don't show error message if user hasn't tried to submit form
    // or if current email input is valid
    this.setState({ contactEmail, emailError: false });
  }

  setComments(e) {
    const comments = e.target.value;
    const commentCount = comments.length;
    if (commentCount > 255) {
      return;
    }
    this.setState({ comments, commentCount });
  }

  setSelectOption(e) {
    this.setState({ selectedOption: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const submittedName = e.target.contactname.value;
    const submittedEmail = e.target.contactemail.value;
    const submittedComments = e.target.comments.value;
    const submittedSelectedOption = e.target.contactpurpose.value;
    // Validate input
    let emailError = !isEmail(submittedEmail);
    let hadEmailError = emailError;
    let nameError = submittedName.length < 1;
    let hadNameError = nameError;

    // If errors, show errors and return
    if (nameError || emailError) {
      this.setState({ emailError, nameError, hadEmailError, hadNameError });
      return;
    }

    // If valid, set submitted values and begin fading form
    this.setState({
      submittedName,
      submittedEmail,
      submittedComments,
      submittedSelectedOption,
      contactName: "",
      contactEmail: "",
      comments: "",
      formClass: "fade-away",
      emailError,
      nameError
    });

    // Fading form takes 1 second, afterwards we want to keep it hidden
    this.timeout = setTimeout(() => {
      this.setState({ formClass: "hide-form" });
      this.timeout = null;
    }, 1000);

    // Send input data from contact form to the POST route of '/contact'
    axios
      .post(`/contact`, {
        submittedName,
        submittedEmail,
        submittedComments,
        submittedSelectedOption
      })
      .then(res => {
        const { data } = res;
        // If successful request/response, but data sent was not accepted
        if (!data.accepted) {
          // If contact form hasn't been hidden, cancel timeout and don't hide form
          if (this.timeout) {
            clearTimeout(this.timeout);
          }
          // If user's email has already submitted contact form 5 times (5 entries in DB)
          // data.alreadysubmitted should be
          // "You have submitted a contact too many times, please contact directly."
          // Show this error to the user
          const contactError = data.alreadysubmitted
            ? data.alreadysubmitted
            : "";
          this.setState({ submitError: true, formClass: "", contactError });
        } else {
          // Successfully submitted contact form
          // Show success message to user
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
  }

  render() {
    return (
      <section id="contact" className="contact-section">
        {
          <SubmitError
            submitError={this.state.submitError}
            contactError={this.state.contactError}
          />
        }
        <LazyLoad offset={600} throttle={25}>
          <div>
            <div className={`contact-form`}>
              <SuccessfulSubmit submitted={this.state.submitted} />
              <form
                className={`contact-form-form ${this.state.formClass}`}
                onSubmit={this.onSubmit}
              >
                <h1 className="contact-form-title">Contact</h1>
                <div className="contact-form-label-error-div">
                  <label className="contact-form-label" htmlFor="contactname">
                    Full Name:
                  </label>
                  {this.state.nameError ? (
                    <div className="contact-form-error">Name is required</div>
                  ) : null}
                </div>
                <div className="contact-form-input-div">
                  <input
                    className="contact-form-contactinput"
                    type="text"
                    id="contactname"
                    name="contactname"
                    value={this.state.contactName}
                    onChange={this.setContactName}
                  />
                </div>
                <div className="contact-form-label-error-div">
                  <label className="contact-form-label" htmlFor="contactemail">
                    E-mail:
                  </label>
                  {this.state.emailError ? (
                    <div className="contact-form-error">
                      Please input a valid e-mail
                    </div>
                  ) : null}
                </div>
                <div className="contact-form-input-div">
                  <input
                    className="contact-form-contactinput"
                    type="text"
                    name="contactemail"
                    id="contactemail"
                    value={this.state.contactEmail}
                    onChange={this.setContactEmail}
                  />
                </div>
                <div className="contact-form-label-error-div">
                  <label className="contact-form-label" htmlFor="comments">
                    Comments:
                  </label>
                  {this.state.commentCount > 235 ? (
                    <div className="contact-form-error">
                      {255 - this.state.commentCount} characters left
                    </div>
                  ) : null}
                </div>
                <textarea
                  className="contact-form-comments-area"
                  name="comments"
                  id="comments"
                  value={this.state.comments}
                  onChange={this.setComments}
                />
                <label className="contact-form-label" htmlFor="contactpurpose">
                  Reason For Contact:
                </label>
                <ContactSelect
                  onChangeProp={this.setSelectOption}
                  value={this.state.selectedOption}
                />
                <input
                  className="contact-form-submit"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
            <WhiteboardBottom />
          </div>
        </LazyLoad>
      </section>
    );
  }
}
