"use server"
import { redirect } from "next/navigation"
import { ContactSchema } from "@/validations/contact"

// ActionStateの型定義
type ActionState = {
  success: boolean
  error: {
    name?: string[]
    email?: string[]
  };
  serverError?: string;
}
// formData：フォームデータを取得
export async function submitContactForm(
  prevState: ActionState, // useActionStateの初期値
  formData: FormData): Promise<ActionState> {
  const name = formData.get("name")
  const email = formData.get("email")
  console.log(name, email)

  // バリデーション
  const validationResult = ContactSchema.safeParse({name,email})
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors
    console.log("サーバー側でエラー", errors)
    return {
      success: false,
      error: {
        name: errors.name || [],
        email: errors.email || [],
      },
      serverError: "バリデーションエラーがあります"
    }
  }
  // DB登録

  redirect("/contacts/complete")
}