"use client"

import { submitContactForm } from "@/lib/actions/contact"
import { ContactSchema } from "@/validations/contact"
import { useActionState, useState } from "react"
import { z } from "zod"

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, {
    success: false,
    error: {}
  })

  const [clientError, setClientErrors] = useState({name: '', email: ''})

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    try{
      if (name === "name") {
        ContactSchema.pick({name: true}).parse({name: value})
      } else if (name === "email") {
        ContactSchema.pick({email: true}).parse({email: value})
      }
      setClientErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    } catch(error){
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors[0].message
        setClientErrors(prev => ({
          ...prev,
          [name]: errorMessage
        }))
      }
    }
  }
  return (
    <div>
      {/* フォームの送信先を指定 */}
      <form action={formAction}>
        <div className="py-24 text-gray-600">
          <div className="mx-auto flex flex-col bg-white shadow-md p-8 md:w-1/2">
            <h2 className="text-2xl font-bold text-center mb-8">お問い合わせ</h2>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm">名前</label>
              <input type="text" id="name" name="name"
                onBlur={handleBlur}
                className="w-full bg-white rounded border border-gray-300
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none oy-1 px-3 leading-8" />
                {state.error.name && (
                  <p className="text-red-500 text-sm sm-1">{state.error.name.join(",")}</p>
                )}
                {clientError.name && (
                  <p className="text-red-500 text-sm sm-1">{clientError.name}</p>
                )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm">メールアドレス</label>
              <input type="text" id="email" name="email"
                onBlur={handleBlur}
                className="w-full bg-white rounded border border-gray-300
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none oy-1 px-3 leading-8" />
                {state.error.email && (
                  <p className="text-red-500 text-sm sm-1">{state.error.email.join(",")}</p>
                )}
                {/* クライアント側のバリデーションエラー */}
                {clientError.email && (
                  <p className="text-red-500 text-sm sm-1">{clientError.email}</p>
                )}
            </div>
            <button className="text-white bg-indigo-500 py-2 px-6 hover:bg-indigo-600 rounded text-lg">送信</button>
          </div>
        </div>
      </form>
    </div>
  )
}
