import "./NewsletterModal.scss";
import ilsLogo from "../../assets/ils-logo-bl.png";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const newsletterToken = localStorage.getItem("newsletterToken");
console.log(newsletterToken);
const NewsletterModal = () => {
  const [hasError, setHasError] = useState({
    name: false,
    email: false,
    submit: false,
  });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    newsletter: true,
    submit: false,
  });

  const [showModal, setShowModal] = useState(() => {
    return newsletterToken ? false : true;
  });

  // check local storage to see if visitor has seen newsletter modal previously
  if (newsletterToken) {
    setShowModal(false);
  }

  const joinNewsletter = async (formObj) => {
    try {
      await axios.post(`${import.meta.env.VITE_NEWSLETTER_URL}`, formObj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (hasError.submit === true)
        setHasError((prevValues) => ({ ...prevValues, submit: false }));
      setFormValues((prevValues) => ({ ...prevValues, submit: true }));
    } catch (error) {
      console.log(error);
      setHasError((prevValues) => ({ ...prevValues, submit: true }));
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    joinNewsletter(formValues);
  };

  const closeModal = () => {};

  return showModal ? (
    <article className="modal">
      <div className="modal__content">
        <img
          src={ilsLogo}
          alt="a crest with student, brain, and speaking podium icons"
          className="modal__logo"
        />
        <div>
          <h2 className="modal__main modal__main--title">
            Subscribe to the Ivy Level Speaking newsletter.
          </h2>
          {hasError.submit ? (
            <p className="modal__main modal__terms modal__terms--red">
              Our apologies! There was an error submitting, please try again
              later.
            </p>
          ) : (
            <p className="modal__main modal__terms">
              Join now for expert tips, exclusive content, and the latest
              updates to help you enhance your public speaking skills. 📫
            </p>
          )}
          <div>
            <form onSubmit={handleSubmit} className="modal__form-container">
              <div className="form__dual-field">
                <TextField
                  className="form__small-field form__field"
                  label="Name"
                  id="name"
                  name="name"
                  error={hasError.name}
                  value={formValues.name}
                  onChange={handleFormChange}
                />
                <TextField
                  className="form__small-field form__field"
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  required
                  aria-required="true"
                  error={hasError.email}
                  value={formValues.email}
                  onChange={handleFormChange}
                  helperText={hasError.email ? "Email is required." : ""}
                />
              </div>
              <button className="modal__button modal__close" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </article>
  ) : (
    <></>
  );
};

export default NewsletterModal;
