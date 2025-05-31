"use server"
import { redirect } from "next/navigation"

// formData：フォームデータを取得
export async function submitContactForm(formData: FormData) {
  const name = formData.get("name")
  const email = formData.get("email")
  console.log(name, email)

  // バリデーション
  // DB登録

  redirect("/contacts/complete")
}