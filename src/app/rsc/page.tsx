import ClientComponent from "@/components/ClientComponent"
import Link from "next/link"

export default function rscPage() {
  console.log("rscPage")
  return (
    <div>
      サーバーコンポーネント
      <ClientComponent />
      <Link href="/about">about</Link>
    </div>
  )
}
