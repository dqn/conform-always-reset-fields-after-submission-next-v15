"use client";

import * as React from "react";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { useActionState } from "react";
import { create } from "./action";

export default function Home() {
  const [lastResult, action] = useActionState(create, undefined);
  const [form, fields] = useForm({
    lastResult,
  });

  return (
    <main className="max-w-screen-lg mx-auto p-8">
      <form {...getFormProps(form)} action={action}>
        <input
          {...getInputProps(fields.foo, { type: "text" })}
          key={fields.title.key}
          placeholder="lorem ipsum"
        />
      </form>
    </main>
  );
}
