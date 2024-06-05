"use server";

import { parseWithZod } from "@conform-to/zod";
import { z } from "zod";

export async function create(_prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: z.object({ foo: z.string() }),
  });
  return submission.reply({ resetForm: false });
}
