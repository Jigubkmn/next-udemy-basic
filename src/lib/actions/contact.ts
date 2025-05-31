"use server"
import { redirect } from "next/navigation"
import { contactSchema } from "@/validations/contact"

// formData：フォームデータを取得
export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  console.log(name, email)

  // バリデーション
  const validationResult = contactSchema.safeParse({name,email})
  if (!validationResult.success) {
    const errors = validationResult.error.flatten()
    console.log("サーバー側でエラー", errors)
    return {}
  }
  // DB登録

  redirect("/contacts/complete")
}