import {NextRequest, NextResponse} from "next/server"

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.includes(',')) {
    console.log("テストテスト");
  }
  return NextResponse.next()
}

export const config = {
  // ミドルウェアを適用するパスを指定
  matcher: ["/blog/:path*"],
}