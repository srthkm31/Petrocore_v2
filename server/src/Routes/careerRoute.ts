import express from "express";
import multer from "multer";
import transporter from "../transporter";
import supabase from "../config/supabase";
import prisma from "../config/prisma";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
  fileFilter(req, file, callback) {
    if (file.mimetype !== "application/pdf") {
      return callback(new Error("Only pdf file is allowed"));
    }
    callback(null, true);
  },
});

router.post("/resume", upload.single("resume"), async (req, res) => {
  let uploadedPath = null;
  let dbSave = false;
  try {
    const { email } = req.body;

    if (!req.file || !email) {
      return res.status(400).json({
        success: false,
        message: "Some fields are missing",
      });
    }
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid email id",
      });
    }

    const existingResume = await prisma.resume.findUnique({
      where: {
        email,
      },
    });
    if (existingResume) {
      if (existingResume.mailDelivered) {
        return res.status(409).json({
          success: false,
          message:
            "You have already submitted your resume. Please wait our team will reach out soon",
        });
      }
      try {
        const { data, error } = await supabase.storage
          .from("Resumes")
          .download(existingResume.storagePath);
        if (error) {
          throw error;
        }

        const array_Buffer = await data.arrayBuffer();
        const fileBuffer = Buffer.from(array_Buffer);

        await transporter.sendMail({
          from: `"Petrocore Workforce Solutions" <${process.env.SMTP_USER}>`,
          to: "hr@petrocore.in",
          subject: `New Resume Submission - ${email}`,
          html: `<div style="background-color: #f9f9f9; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <div style="max-width: 480px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e1e4e8; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      
      <!-- Accent Bar -->
      <div style="height: 4px; background-color: #0056b3;"></div>

      <div style="padding: 32px;">
        <h2 style="margin: 0 0 12px 0; color: #1a1a1a; font-size: 20px; font-weight: 600; letter-spacing: -0.02em;">
          New Resume Submission
        </h2>
        
        <p style="margin: 0 0 24px 0; color: #666; font-size: 15px; line-height: 1.5;">
          A candidate has submitted their application via the Petrocore careers portal.
        </p>

        <hr style="border: 0; border-top: 1px solid #eee; margin: 24px 0;">

        <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #999; margin-bottom: 8px; font-weight: 700;">
          Candidate Contact
        </div>
        
        <div style="background: #f5f7f9; padding: 12px 16px; border-radius: 6px; border: 1px solid #ebf0f5;">
          <a href="mailto:${email}" style="color: #0056b3; text-decoration: none; font-size: 16px; font-weight: 500;">
            ${email}
          </a>
        </div>
      </div>

      <div style="padding: 16px 32px; background: #fafafa; border-top: 1px solid #eee; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #aaa;">
          &copy; 2026 Petrocore Systems
        </p>
      </div>
    </div>
  </div>`,
          attachments: [
            {
              filename: existingResume.fileName,
              content: fileBuffer,
            },
          ],
        });

        await prisma.resume.update({
          where: {
            email,
          },
          data: {
            mailDelivered: true,
          },
        });

        return res.status(200).json({
          success: true,
          message: "Resume submitted successfully",
        });
      } catch (error) {
        console.error("Retry email failed:", error);

        return res.status(200).json({
          success: true,
          message: "Your resume has already been received.",
        });
      }
    }
    const fileName = `${Date.now()}_${req.file.originalname}`;
    const { data, error } = await supabase.storage
      .from("Resumes")
      .upload(fileName, req.file.buffer, {
        contentType: "application/pdf",
      });
    if (error) {
      throw error;
    }
    uploadedPath = data.path;

    await prisma.resume.create({
      data: {
        email,
        fileName: req.file.originalname,
        storagePath: uploadedPath,
      },
    });
    dbSave = true;
    try {
      await transporter.sendMail({
        from: `"Petrocore Workforce Solutions" <${process.env.SMTP_USER}>`,
        to: `${email}`,
        subject: "Resume submitted successfully",
        html: `
              <div style="background-color: #f9f9f9; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                <div style="max-width: 500px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e1e4e8; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">

                  <!-- Accent Bar -->
                  <div style="height: 4px; background-color: #0056b3;"></div>

                  <div style="padding: 36px 32px;">
                    <h2 style="margin: 0 0 16px 0; color: #1a1a1a; font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">
                      Application Received Successfully
                    </h2>

                    <p style="margin: 0 0 18px 0; color: #555; font-size: 15px; line-height: 1.6;">
                      Thank you for submitting your application to Petrocore Workforce Solutions.
                    </p>

                    <p style="margin: 0 0 18px 0; color: #555; font-size: 15px; line-height: 1.6;">
                      We have successfully received your resume and our recruitment team will review your application.
                    </p>

                    <div style="background: #f5f7f9; border: 1px solid #ebf0f5; border-radius: 6px; padding: 16px; margin: 24px 0;">
                      <p style="margin: 0; color: #1a1a1a; font-size: 15px; font-weight: 500; text-align: center;">
                        Our team will reach out to you within 48 hours if your profile matches our current requirements.
                      </p>
                    </div>

                    <p style="margin: 0; color: #777; font-size: 14px; line-height: 1.5;">
                      We appreciate your interest in joining Petrocore Workforce Solutions.
                    </p>
                  </div>

                  <div style="padding: 16px 32px; background: #fafafa; border-top: 1px solid #eee; text-align: center;">
                    <p style="margin: 0; font-size: 12px; color: #aaa;">
                      &copy; 2026 Petrocore Systems
                    </p>
                  </div>

                </div>
              </div>
`,
      });
    } catch (error) {
      console.log("confirmation email failed");
    }
    try {
      await transporter.sendMail({
        from: `"Petrocore Workforce Solutions" <${process.env.SMTP_USER}>`,
        to: "hr@petrocore.in",
        subject: `New Resume Submission - ${email}`,
        html: `
        <div style="background-color: #f9f9f9; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <div style="max-width: 480px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e1e4e8; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      
      <!-- Accent Bar -->
      <div style="height: 4px; background-color: #0056b3;"></div>

      <div style="padding: 32px;">
        <h2 style="margin: 0 0 12px 0; color: #1a1a1a; font-size: 20px; font-weight: 600; letter-spacing: -0.02em;">
          New Resume Submission
        </h2>
        
        <p style="margin: 0 0 24px 0; color: #666; font-size: 15px; line-height: 1.5;">
          A candidate has submitted their application via the Petrocore careers portal.
        </p>

        <hr style="border: 0; border-top: 1px solid #eee; margin: 24px 0;">

        <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #999; margin-bottom: 8px; font-weight: 700;">
          Candidate Contact
        </div>
        
        <div style="background: #f5f7f9; padding: 12px 16px; border-radius: 6px; border: 1px solid #ebf0f5;">
          <a href="mailto:${email}" style="color: #0056b3; text-decoration: none; font-size: 16px; font-weight: 500;">
            ${email}
          </a>
        </div>
      </div>

      <div style="padding: 16px 32px; background: #fafafa; border-top: 1px solid #eee; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #aaa;">
          &copy; 2026 Petrocore Systems
        </p>
      </div>
    </div>
  </div>
      `,
        attachments: [
          {
            filename: req.file.originalname,
            content: req.file.buffer,
          },
        ],
      });
      await prisma.resume.update({
        where: {
          email,
        },
        data: {
          mailDelivered: true,
        },
      });
    } catch (error) {
      console.log("email failed", error);
    }

    return res.status(200).json({
      success: true,
      message: "Resume submitted successfully",
    });
  } catch (error) {
    console.error(error);

    if (uploadedPath && !dbSave) {
      await supabase.storage.from("Resumes").remove([uploadedPath]);
    }

    return res.status(500).json({
      success: false,
      message: "Failed to submit resume",
    });
  }
});

export default router;
