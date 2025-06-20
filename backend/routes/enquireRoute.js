const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, type, description, userEmail } = req.body;
  console.log(userEmail);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: "jaykadam559@gmail.com",
    subject: `Enquiry for ${name}`,
    text: `
    Someone enquired about:
    Name: ${name}
    Type: ${type}
    Description: ${description}
    Contact Email: ${userEmail || "Not provided"}
  `,
  };
  const userMailOptions = {
    from: process.env.MY_EMAIL,
    to: userEmail,
    subject: `Thanks for your enquiry for ${name}`,
    text: `Hi there!\n\nThanks for enquiring about:\n- ${name}\n- ${type}\n\nWe’ll get back to you soon.\n\nE-Store Team`,
  };


  try {
    await transporter.sendMail(mailOptions);
      if (userEmail) {
        await transporter.sendMail(userMailOptions);
      }
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});

module.exports = router;
