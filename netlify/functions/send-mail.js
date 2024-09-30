import { Resend } from "resend";

const resend = new Resend(process.env.VITE_RESEND_API_KEY);

export async function handler(event, context) {
  try {
    const formObj = JSON.parse(event.body);
    console.log(formObj);
    const forwardEmail = "kirk@arroyastudio.com";
    // await resend.emails.send({
    //   from: "Ivy Level Speaking Contact Form <contact@ivylevelspeaking.com>",
    //   to: [forwardEmail],
    //   reply_to: req.body.email,
    //   subject: `${req.body.name} - Ivy Level Speaking Inquiry`,
    //   html: `<p>New inquiry from ${req.body.name}</p>`,
    // });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `Inquiry from ${formObj.name} has been forwarded to ${forwardEmail}`,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
