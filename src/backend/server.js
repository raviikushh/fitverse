import express from "express";
import Razorpay from "razorpay";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Razorpay instance
const razorpay = new Razorpay({
  key_id: "your_razorpay_key_id",
  key_secret: "your_razorpay_key_secret",
});

// Create Order
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating Razorpay order");
  }
});

// Send Email
app.post("/send-email", async (req, res) => {
  const { userEmail, adminEmail, packageDetails } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_email_password",
    },
  });

  const mailOptions = {
    from: "your_email@gmail.com",
    to: [userEmail, adminEmail],
    subject: "Payment Confirmation",
    text: `Thank you for registering for the package: ${packageDetails}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
