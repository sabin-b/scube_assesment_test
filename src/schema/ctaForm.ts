import domPurify from "dompurify";
import xss from "xss";
import { z } from "zod";

export const CtaFormSchema = z.object({
  service: z
    .enum(["service_1", "service_2", "service_3", "service_4"], {
      message: "please choose the service",
    })
    .transform((input) => xss(domPurify.sanitize(input)).trim()),
  email: z
    .string({ message: "please enter the email" })
    .email({ message: "please enter the valid email" })
    .transform((input) => xss(domPurify.sanitize(input)).trim().toLowerCase()),
});
