import ClientComponent from "@/components/ClientComponent"

export default function rscPage() {
  console.log("rscPage")
  return (
    <div>
      サーバーコンポーネント
      <ClientComponent />
    </div>
  )
}
