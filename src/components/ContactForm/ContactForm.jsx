import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

const ContactForm = () => {
  const [hasError, setHasError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
  });

  const handleFormChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    // e.target.value.length ? setHasError(false) : setHasError(true);
  };

  return (
    <article>
      <form action="">
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
        />
        <TextField
          label="Email"
          id="email"
          name="email"
          required
          aria-required="true"
          error={hasError.email}
          value={formValues.email}
          onChange={handleFormChange}
          helperText={hasError.email ? "Email is required." : ""}
        />
        <TextField
          label="Phone Number"
          id="phone"
          name="phone"
          error={hasError.phone}
          value={formValues.phone}
          onChange={handleFormChange}
        />
        <FormGroup>
          <span>Services You’re interested in:</span>
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
                value="Consultation"
                checked={formValues.services.includes("Consultation")}
                onChange={handleFormChange}
              />
            }
            label="Consultation"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="services"
                value="Not Sure Yet"
                checked={formValues.services.includes("Not Sure Yet")}
                onChange={handleFormChange}
              />
            }
            label="Not Sure Yet"
          />
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
        />
      </form>
    </article>
  );
};

export default ContactForm;
