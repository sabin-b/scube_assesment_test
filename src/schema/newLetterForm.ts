import domPurify from "dompurify";
import xss from "xss";
import { z } from "zod";

export const NewsLetterFormSchema = z.object({
  firstName: z
    .string()
    .nonempty({ message: "first name is required" })
    .min(3, { message: "first name should be at least 3 characters long" })
    .regex(/^[A-Za-z]+([ '-][A-Za-z]+)*$/, {
      message:
        "first name can only contain letters, spaces, or hyphens, and must start with a letter",
    })
    .transform((input) =>
      input ? xss(domPurify.sanitize(input)).trim() : input
    ),
  email: z
    .string({ message: "please enter the email" })
    .email({ message: "please enter the valid email" })
    .transform((input) => xss(domPurify.sanitize(input)).trim().toLowerCase()),
});
