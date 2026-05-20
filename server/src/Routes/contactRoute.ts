import express from "express";
import transporter from "../transporter";
const router = express.Router();
import contactSchema from "../validations/contactValidation";
import prisma from "../config/prisma";

const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

router.post("/contact", async (req, res) => {
  try {
    const result = contactSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: result.error.issues[0].message,
      });
    }
    const { fullName, email, phone, company, service, message } = result.data;

    await prisma.contact.create({
      data: { fullName, email, phone, company, service, message },
    });

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : "Not provided";
    const safeCompany = company ? escapeHtml(company) : "Not provided";
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message);

    try {
      await transporter.sendMail({
        from: `"Petrocore Workforce Solutions" <${process.env.SMTP_USER}>`,
        to: [
          "tarun@petrocore.in",
          "akumar@petrocore.in",
          "info@petrocore.in",
          "admin@petrocore.in",
        ],
        subject: `New contact form submission - ${fullName}`,
        html: `
        <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>New Contact Form Submission</title>

    <style>
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 24px;
          background-color: #f7f7f7;
          font-family: Arial, Helvetica, sans-serif;
          color: #111111;
        }

        .container {
          max-width: 640px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid #ebebeb;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }

        .header {
          padding: 32px;
          background-color: #ffffff;
          border-bottom: 1px solid #efefef;
        }

        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
          color: #111111;
          letter-spacing: -0.03em;
        }

        .subtext {
          margin-top: 8px;
          font-size: 14px;
          color: #777777;
          line-height: 1.6;
        }

        .content {
          padding: 34px 32px;
        }

        .section {
          margin-bottom: 26px;
        }

        .label {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #8a8a8a;
          margin-bottom: 8px;
        }

        .value {
          font-size: 17px;
          color: #111111;
          line-height: 1.8;
          font-weight: 500;
        }

        .message-box {
          margin-top: 12px;
          padding: 24px;
          background-color: #fafafa;
          border: 1px solid #efefef;
          border-radius: 14px;
          line-height: 2;
          color: #222222;
          font-size: 17px;
          white-space: pre-line;
        }

        .footer {
          padding: 22px 32px;
          background-color: #fcfcfc;
          border-top: 1px solid #efefef;
          font-size: 12px;
          color: #8a8a8a;
          text-align: center;
          line-height: 1.7;
        }

        @media screen and (max-width: 640px) {
          body {
            padding: 14px;
          }

          .content,
          .header,
          .footer {
            padding-left: 22px;
            padding-right: 22px;
          }

          .header h1 {
            font-size: 24px;
          }

          .value,
          .message-box {
            font-size: 16px;
          }
        }
    </style>
    </head>

    <body>

    <div class="container">

        <div class="header">
          <h1>Petrocore Solutions</h1>

          <p class="subtext">
            New inquiry received from the Petrocore website contact form.
          </p>
        </div>

        <div class="content">

          <div class="section">
              <div class="label">Full Name</div>
              <div class="value">${safeFullName}</div>
          </div>

          <div class="section">
              <div class="label">Email Address</div>
              <div class="value">${safeEmail}</div>
          </div>

          <div class="section">
              <div class="label">Phone Number</div>
              <div class="value">${safePhone}</div>
          </div>

          <div class="section">
              <div class="label">Company</div>
              <div class="value">${safeCompany}</div>
          </div>

          <div class="section">
              <div class="label">Service Interest</div>
              <div class="value">${safeService}</div>
          </div>

          <div class="section">
              <div class="label">Message</div>

              <div class="message-box">
                ${safeMessage}
              </div>
          </div>

          <div class="section">
              <div class="label">Submitted At</div>
              <div class="value">${new Date().toLocaleString()}</div>
          </div>

        </div>

        <div class="footer">
          This email was automatically generated from the Petrocore Solutions contact form.
        </div>

    </div>

    </body>
    </html>
        `,
      });
    } catch (error) {
      console.error("Contact notification email failed:", error);
    }

    res.status(200).json({
      success: true,
      message: "Contact inquiry submitted successfully",
    });
  } catch (error) {
    console.error("Contact route error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit contact inquiry",
    });
  }
});

export default router;
