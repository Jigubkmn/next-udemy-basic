"use server"
import { redirect } from "next/navigation"
import { ContactSchema } from "@/validations/contact"
import { prisma } from "@/lib/prisma"

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
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  console.log(name, email)

  // バリデーション
  const validationResult = ContactSchema.safeParse({name,email})
  console.log("validationResult",validationResult)
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
  // メールアドレスが存在しているかどうか
  const existingContact = await prisma.contact.findUnique({where: { email: email }})
  if (existingContact) {
    return {
      success: false,
      error: {
        name: [],
        email: ["このメールアドレスはすでに存在しています"]
      },
    }
  }

  await prisma.contact.create({
    data: { name,email }
  })

  redirect("/contacts/complete")
}