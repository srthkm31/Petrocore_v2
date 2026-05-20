import * as z from "zod";

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Fullname too short")
    .max(30, "Fullname too long"),
  email: z.string().trim().toLowerCase().pipe(z.email("Invalid email address")),
  phone: z
    .string()
    .trim()
    .regex(/^\+91\s?[6-9]\d{9}$/, "Invalid phone number")
    .optional()
    .or(z.literal("")),
  company: z
    .string()
    .trim()
    .max(50, "Company name too long")
    .optional()
    .or(z.literal("")),
  service: z.enum([
    "Project Management Consultancy",
    "Well Engineering",
    "Execution & Operational Support",
    "Workforce Solutions",
    "Other",
  ]),
  message: z
    .string()
    .trim()
    .min(10, "Message too short")
    .max(1500, "Message too long"),
});

export default contactSchema;
