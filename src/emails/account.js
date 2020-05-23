const sgmail = require("@sendgrid/mail");

sgmail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgmail.send({
    to: email,
    from: "yashupadhyay2001@gmail.com",
    subject: "Welcome to the task manager app!",
    text: `Welcome to the app, Mr. ${name}, Let me know how you get along with the app`,
  });

}

const sendGoodBye = (email, name) => {
  sgmail.send({
    to:email,
    from: "yashupadhyay2001@gmail.com",
    subject: "Good Bye",
    text: `It was nice working with you, ${name}, please review our app to help us improve further.`
  });
}

module.exports = {
  sendWelcomeEmail,
  sendGoodBye
}
