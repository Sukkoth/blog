import { json } from "@remix-run/react";
import { ZodSchema } from "zod";

export default function ValidateOnSchema(schema: ZodSchema, formData: unknown) {
  const validation = schema.safeParse(formData);
  if (!validation.success) {
    return json(
      {
        message: "Validation faild",
        errors: validation.error.flatten(),
      },
      {
        status: 401,
      }
    );
  }

  return validation.data;
}
