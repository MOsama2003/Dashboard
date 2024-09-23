import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, "Please enter your email.").email(),
  password: z
    .string({
      required_error: "Please enter your password.",
    })
    .min(1, "Please enter your password."),
});
