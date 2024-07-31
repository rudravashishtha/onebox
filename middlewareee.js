import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req) {
    const path = req.nextUrl.pathname;
    const authToken = req.cookies.get("OurSiteJWT");
    console.log(authToken)

  if (authToken && path !== "/") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  } else if (!authToken && path !== "/auth/:path") {
    return NextResponse.redirect(new URL("/auth/google-login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/google-login", "/auth/signup"],
};
