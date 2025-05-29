import {NextResponse} from "next/server"

export async function GET() {
  return NextResponse.json([
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Jim"},
  ])
}
