import { z } from "zod";

export const LoginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must 6 characters long"),
});

export const RegisterValidation = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string().optional(),
  password: z.string().min(6, "Password must 6 or more characters long"),
});

export const BlogValidation = z.object({
  title: z.string().min(5),
  body: z.string().min(15),
  categoryId: z
    .string({
      required_error: "You need to select category for the blog",
    })
    .min(1, {
      message: "You need to select category for the blog",
    }),
  tags: z
    .string()
    .transform((str) => {
      // Split the string by commas and trim any spaces
      return str.split(",").map((item) => item.trim());
    })
    .refine((arr) => arr.every((item) => !isNaN(Number(item))), {
      message: "All values must be valid integers.",
    })
    .transform((arr) => arr.map((item) => parseInt(item, 10))),
});
