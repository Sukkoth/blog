import { typeToFlattenedError, z, ZodSchema } from "zod";

export default function ParseValidationErrors(
  schema: ZodSchema,
  errors: unknown
) {
  return errors
    ? (errors as typeToFlattenedError<z.infer<typeof schema>>).fieldErrors
    : null;
}
