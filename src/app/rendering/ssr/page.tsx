import Image from "next/image"
export const dynamic = "force-dynamic" // SSR強制

export default async function SSGPage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: 'no-store'
  })

  const resJson = await res.json()
  const image = resJson.message

  const timestamp = new Date().toISOString()

  return (
    <div>
      SSR 毎回リロード：{timestamp}
      <br/>
      <Image src={image} alt="dog" width={300} height={300} />
    </div>
  )
}
