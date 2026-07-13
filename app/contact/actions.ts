"use server";

import { revalidatePath } from "next/cache";

export async function sendMessage(formData: FormData) {
  const name = formData.get("name")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !message) {
    console.log("Validation failed: name and message are required.");
    return;
  }

  console.log("New contact submission:", { name, message });

  revalidatePath("/contact");
}