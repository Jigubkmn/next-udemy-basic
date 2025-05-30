"use client"
import { useState } from "react"

export default function RccPage() {
  const [count, setCount] = useState(0)
  console.log("rscPage")
  return (
    <div>
      rccPage
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}
