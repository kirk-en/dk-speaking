import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./ContactForm.scss";
import { Resend } from "resend";
import axios from "axios";

const ContactForm = () => {
  const [hasError, setHasError] = useState({
    name: false,
    email: false,
    message: false,
    other: false,
  });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    other: "",
    services: [],
    submit: false,
  });

  const handleFormChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "services") {
      setFormValues((prevValues) => ({
        ...prevValues,
        services: checked
          ? [...prevValues.services, value]
          : prevValues.services.filter((service) => service !== value),
      }));
    } else {
      setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    }
    // TBD --- HANDLE ERROR CHECKING ---
    // e.target.value.length ? setHasError(false) : setHasError(true);
  };

  const sendMail = async (formObj) => {
    try {
      await axios.post(`${import.meta.env.VITE_SEND_MAIL_URL}`, formObj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFormValues((prevValues) => ({ ...prevValues, submit: true }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail(formValues);
  };

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  return formValues.submit ? (
    <div className="form">
      <h3>Success!</h3>
      <p>
        Your message has been successfully sent, and we'll get back to you as
        soon as possible.
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        label="Name"
        id="name"
        name="name"
        required
        aria-required="true"
        error={hasError.name}
        value={formValues.name}
        onChange={handleFormChange}
        helperText={hasError.name ? "Name is required." : ""}
        fullWidth
        className="form__field"
      />
      <div className="form__dual-field">
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
        <TextField
          className="form__small-field form__field"
          label="Phone Number"
          id="phone"
          name="phone"
          error={hasError.phone}
          value={formValues.phone}
          onChange={handleFormChange}
        />
      </div>
      <FormGroup>
        <span>Services You’re interested in:</span>
        <div className="form__services">
          <FormControlLabel
            control={
              <Checkbox
                name="services"
                value="Coaching"
                checked={formValues.services.includes("Coaching")}
                onChange={handleFormChange}
              />
            }
            label="Coaching"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="services"
                value="Speaking"
                checked={formValues.services.includes("Speaking")}
                onChange={handleFormChange}
              />
            }
            label="Speaking"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="services"
                value="Workshop Facilitation"
                checked={formValues.services.includes("Workshop Facilitation")}
                onChange={handleFormChange}
              />
            }
            label="Workshop Facilitation"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="services"
                value="One-on-One Coaching"
                checked={formValues.services.includes("One-on-One Coaching")}
                onChange={handleFormChange}
              />
            }
            label="One-on-One Coaching"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="services"
                value="Academic Presentation Prep"
                checked={formValues.services.includes(
                  "Academic Presentation Prep"
                )}
                onChange={handleFormChange}
              />
            }
            label="Academic Presentation Prep"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="services"
                value="Speechwriting Assistance"
                checked={formValues.services.includes(
                  "Speechwriting Assistance"
                )}
                onChange={handleFormChange}
              />
            }
            label="Speechwriting Assistance"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="services"
                value="Virtual Presentation Coaching"
                checked={formValues.services.includes(
                  "Virtual Presentation Coaching"
                )}
                onChange={handleFormChange}
              />
            }
            label="Virtual Presentation Coaching"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="services"
                value="Media Training"
                checked={formValues.services.includes("Media Training")}
                onChange={handleFormChange}
              />
            }
            label="Media Training"
          />
          <div>
            <FormControlLabel
              sx={{ mr: 0 }}
              control={
                <Checkbox
                  name="services"
                  value="Other"
                  checked={formValues.services.includes("Other")}
                  onChange={handleFormChange}
                />
              }
              label=""
            />
            <TextField
              className="form__small-field form__field"
              label="Other"
              id="other"
              name="other"
              error={hasError.other}
              value={formValues.other}
              onChange={handleFormChange}
              sx={{ m: 0 }}
            />
          </div>
        </div>
      </FormGroup>
      <TextField
        multiline
        rows={4}
        label="Message"
        id="message"
        name="message"
        required
        aria-required="true"
        error={hasError.message}
        value={formValues.message}
        onChange={handleFormChange}
        helperText={hasError.email ? "Make sure to include a message!" : ""}
        fullWidth
        className="form__field"
      />
      <div>
        <button
          className="button__main button__main--lr-zero-margin"
          type="submit"
        >
          send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
