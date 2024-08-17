import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = new TextEncoder().encode(process.env.SECRET);

export async function middleware(req: NextRequest) {
  const token = req.headers.get("authorization")?.split(" ")[1] || null;
  const response = NextResponse.next();

  if (token != null) {
    try {
      const { payload } = await jwtVerify(token, secretKey);
      response.headers.set("x-user-authenticated", "true");
    } catch (error) {
      response.headers.set("x-user-authenticated", "false");
    }
  }

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
