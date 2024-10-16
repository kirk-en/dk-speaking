import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./ContactForm.scss";
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
    newsletter: true,
    services: [],
    submit: false,
  });

  const handleFormChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "services") {
      setFormValues((prevValues) => {
        const updatedServices = checked
          ? [...prevValues.services, value]
          : prevValues.services.filter((service) => service !== value);

        // Error check other checkbox field
        if (updatedServices.includes("Other") && prevValues.other === "")
          setHasError((prevErrorValues) => ({
            ...prevErrorValues,
            other: true,
          }));
        else
          setHasError((prevErrorValues) => ({
            ...prevErrorValues,
            other: false,
          }));

        // return the updated state
        return { ...prevValues, services: updatedServices };
      });
    } else if (name === "newsletter") {
      setFormValues((prevValues) => {
        return { ...prevValues, newsletter: checked };
      });
    } else {
      setFormValues((prevValues) => {
        const updatedValues = { ...prevValues, [name]: value };

        // Error check other checkbox field
        if (prevValues.services.includes("Other") && updatedValues.other === "")
          setHasError((prevErrorValues) => ({
            ...prevErrorValues,
            other: true,
          }));
        else
          setHasError((prevErrorValues) => ({
            ...prevErrorValues,
            other: false,
          }));
        return updatedValues;
      });
    }
  };

  const sendMail = async (formObj) => {
    try {
      await axios.post(`${import.meta.env.VITE_SEND_MAIL_URL}`, formObj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      formObj.newsletter && joinNewsletter(formObj);
      setFormValues((prevValues) => ({ ...prevValues, submit: true }));
    } catch (error) {
      console.log(error);
    }
  };

  const joinNewsletter = async (formObj) => {
    try {
      await axios.post(`${import.meta.env.VITE_NEWSLETTER_URL}`, formObj, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !Object.values(hasError).includes(true) && sendMail(formValues);
  };

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
              helperText={hasError.other ? "No other service specified" : ""}
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
      <FormControlLabel
        control={
          <Checkbox
            name="newsletter"
            value="newsletter"
            checked={formValues.newsletter}
            onChange={handleFormChange}
          />
        }
        label="Subscribe to the Ivy Level Speaking Newsletter"
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
