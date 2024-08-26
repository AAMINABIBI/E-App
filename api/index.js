const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://aaminabibi2324:amna@cluster0.crm78.mongodb.net/MERNAdmin?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB");
  });

app.listen(port, () => {
  console.log("Server is running on port 5000");
});

// Fixed Credentials
const FIXED_EMAIL = "fixedemail@example.com"; // Replace with your fixed email
const FIXED_PASSWORD = "fixedpassword"; // Replace with your fixed password

// Modified login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Check against fixed credentials
  if (email === FIXED_EMAIL && password === FIXED_PASSWORD) {
    // Generate JWT token if credentials match
    const token = jwt.sign({ email }, "your_jwt_secret_key", { expiresIn: "1h" });
    return res.status(200).json({ token });
  } else {
    // Return error if credentials do not match
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

// Commented out registration logic since it's no longer needed
/*
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if email is registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Create a new user
    const newUser = new User({ name, email, password });

    // Generate and store verification token
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    // Save to database
    await newUser.save();

    // Send verification email
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(200).json({ message: "Registration successful, please verify your email." });
  } catch (error) {
    console.log("Error registering user", error);
    res.status(500).json({ message: "Registration Failed" });
  }
});
*/

// Endpoint to verify the particular user
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Email verification failed" });
  }
});
