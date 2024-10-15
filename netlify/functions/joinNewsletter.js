import { SibApiV3Sdk } from "sib-api-v3-sdk";
let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.VITE_BREVO_API_KEY;

let apiInstance = new SibApiV3Sdk.ContactsApi();

let newContact = new SibApiV3Sdk.CreateContact();

newContact.EMAIL = "kirkenbysk@gmail.com";
newContact.FIRSTNAME = "Kirk";
newContact.LASTNAME = "Testbysk";

apiInstance.createContact(newContact).then(
  function (data) {
    console.log("Sucessfully hit Brevo API. Data: " + JSON.stringify(data));
  },
  function (error) {
    console.log(error);
  }
);
