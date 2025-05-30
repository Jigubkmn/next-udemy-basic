"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RccPage() {
  const [count, setCount] = useState(0)
  console.log("rscPage")
  const router = useRouter()
  return (
    <div>
      rccPage
      <br/>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Link href="/about">rsc</Link>
      <br/>
      <button onClick={() => router.push("/about")}>rsc</button>
    </div>
  )
}
