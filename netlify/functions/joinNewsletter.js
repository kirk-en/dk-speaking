import SibApiV3Sdk from "sib-api-v3-sdk";

export async function handler(event, context) {
  try {
    // Parse incoming data from form
    const formObj = JSON.parse(event.body);
    let contactName = formObj.name.split(" ");

    // Brevo setup
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
    let apiKey = defaultClient.authentications["api-key"];
    apiKey.apiKey = process.env.VITE_BREVO_API_KEY;
    let apiInstance = new SibApiV3Sdk.ContactsApi();

    // Create new contact for email list
    let newContact = new SibApiV3Sdk.CreateContact();
    newContact.email = formObj.email;
    if (contactName.length >= 1) {
      newContact.attributes = {
        FIRSTNAME: contactName[0],
        LASTNAME: contactName.length > 1 ? contactName[1] : "",
      };
    }
    newContact.listIds = [5];

    const data = await apiInstance.createContact(newContact);

    console.log("Sucessfully hit Brevo API. Data: " + JSON.stringify(data));
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Contact added successfully", data }),
    };
  } catch (error) {
    console.error("Error occurred: ", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
