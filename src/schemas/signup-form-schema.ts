import { z } from "zod";

export const signupFormSchema = z.object({
  phone: z
    .number()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number can't be longer than 15 digits"),
  email: z.string().email({
    message: "Invalid email address.",
  }),
});
