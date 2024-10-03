import { Resend } from "resend";

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export async function handler(event, context) {
  try {
    const formObj = JSON.parse(event.body);
    console.log(formObj);
    const forwardEmail = "kirk@arroyastudio.com";
    await resend.emails.send({
      from: "Ivy Level Speaking Contact Form <contact@ivylevelspeaking.com>",
      to: [forwardEmail],
      replyTo: [formObj.email],
      subject: `${formObj.name} - Ivy Level Speaking Inquiry`,
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h1 style="color: #7eb1cb;">New inquiry from ${formObj.name}</h1>

      <p style="font-size: 16px; line-height: 1.5;">
        <strong>Phone Number:</strong> ${formObj.phone} <br />
        <strong>Email:</strong> <a href="mailto:${
          formObj.email
        }?subject=Re:%20${encodeURIComponent(
        "Your Ivy Level Speaking Inquiry"
      )}&body=${encodeURIComponent(
        "Hello " + formObj.name + ",\n\nThank you for connecting."
      )}" style="color: #1a73e8;">${formObj.email}</a>
      </p>

      <p style="font-size: 16px; line-height: 1.5;">
        <strong>Interested in the following services:</strong>
      </p>

      <ul style="font-size: 16px; line-height: 1.5; padding-left: 20px;">
        ${formObj.services
          .map((service) => `<li style="margin-bottom: 10px;">${service}</li>`)
          .join("")}
      </ul>

       <p style="font-size: 16px; line-height: 1.5;">
        <strong>Message:</strong> ${formObj.message.replace(/\n/g, "<br>")}
      </p>

      <h2 style="color: #333;">
        Reply to ${formObj.name} in a new email thread with <a href="mailto:${
        formObj.email
      }?subject=Re:%20${encodeURIComponent(
        "Your Ivy Level Speaking Inquiry"
      )}&body=${encodeURIComponent(
        "Hello " + formObj.name + ",\n\nThank you for connecting."
      )}" style="color: #1a73e8;">${formObj.email}</a>
      </h2>
    </div>
  `,
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Inquiry from ${formObj.name} has been forwarded to Ivy Level Speaking`,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
