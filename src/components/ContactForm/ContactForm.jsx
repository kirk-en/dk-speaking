import { TextField } from "@mui/material";
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
  });

  const handleFormChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    e.target.value.length ? setHasError(false) : setHasError(true);
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
          sx={{ width: "100%" }}
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
        <TextField
          label="Message"
          id="message"
          name="message"
          required
          aria-required="true"
          error={hasError.message}
          value={formValues.message}
          onChange={handleFormChange}
          helperText={hasError.email ? "Make sure to include a message!" : ""}
          sx={{ width: "100%" }}
        />
      </form>
    </article>
  );
};

export default ContactForm;
