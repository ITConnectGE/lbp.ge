/**
 * Optional Express server for vacancy form submissions.
 * NOT deployed to GitHub Pages — run separately if needed.
 *
 * Requirements:
 *   npm install express multer nodemailer cors
 *
 * Environment variables:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS — mail server credentials
 *   RECEIVER_EMAIL — defaults to info@lbp.ge
 *   PORT — defaults to 3000
 */

const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// CORS — allow requests from lbp.ge
app.use(
  cors({
    origin: [
      "https://lbp.ge",
      "https://www.lbp.ge",
      "http://localhost:3000",
      "http://127.0.0.1:5500",
    ],
  })
);

// Multer config — accept PDF/DOC/DOCX, max 10MB
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const allowedMimes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only PDF, DOC, and DOCX are allowed."));
    }
  },
});

// Mail transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587", 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/vacancy-apply", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, message, position, website } = req.body;

    // Honeypot check
    if (website) {
      return res.json({ success: true });
    }

    // Basic validation
    if (!fullName || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Resume file is required" });
    }

    const receiverEmail = process.env.RECEIVER_EMAIL || "info@lbp.ge";

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: receiverEmail,
      subject: `Job Application: ${position || "Unknown Position"} — ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Position: ${position || "Not specified"}`,
        "",
        "Message:",
        message || "(No message provided)",
      ].join("\n"),
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
        },
      ],
    });

    res.json({ success: true });
  } catch (err) {
    console.error("Error processing application:", err);
    res.status(500).json({ error: "Failed to process application" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
