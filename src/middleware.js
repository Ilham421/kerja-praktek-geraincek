import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const token = request.cookies.get("admin_token")?.value;
  const { pathname } = request.nextUrl;

  // Logic 1: Jika sudah login tapi buka /login, lempar ke dashboard
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Logic 2: Proteksi folder /admin
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "rahasia-ncek-123"
      );
      const { payload } = await jwtVerify(token, secret);

      // RBAC: Admin tidak boleh akses menu tertentu
      const restrictedPaths = [
        "/admin/users",
        "/admin/stok",
        "/admin/laporan",
        "/admin/contacts",
        "/admin/log",
      ];
      const isRestricted = restrictedPaths.some((path) =>
        pathname.startsWith(path)
      );

      if (isRestricted && payload.role !== "superadmin") {
        return NextResponse.redirect(
          new URL("/admin?accessDenied=true", request.url)
        );
      }

      // Cek apakah user masih ada di database
      try {
        const res = await fetch(`${request.nextUrl.origin}/api/auth/me`, {
          headers: { Cookie: `admin_token=${token}` },
        });

        if (res.status === 401) {
          const data = await res.json();
          // User dihapus → redirect ke login dengan parameter deleted
          const response = NextResponse.redirect(
            new URL("/login?deleted=true", request.url)
          );
          response.cookies.delete("admin_token");
          return response;
        }
      } catch (fetchErr) {
        // Jika fetch gagal, biarkan user tetap akses
        console.error("Middleware user check failed:", fetchErr);
      }

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(
        new URL("/login?sessionExpired=true", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};