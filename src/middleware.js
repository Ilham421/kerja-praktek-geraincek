import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const token = request.cookies.get('admin_token')?.value;
  const { pathname } = request.nextUrl;

  // Logic 1: Jika sudah login tapi buka /login, lempar ke dashboard
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // Logic 2: Proteksi folder /admin
  if (pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || "rahasia-ncek-123");
      const { payload } = await jwtVerify(token, secret);

      // RBAC Security: Admin tidak boleh akses menu User atau Stok via URL
      // Menambahkan '/admin/laporan' ke daftar path yang dibatasi
      const restrictedPaths = ['/admin/users', '/admin/stok', '/admin/laporan'];
      const isRestricted = restrictedPaths.some(path => pathname.startsWith(path));
      
      if (isRestricted && payload.role !== 'superadmin') {
        // Redirect ke dashboard admin dengan pesan akses ditolak
        return NextResponse.redirect(new URL('/admin', request.url));
      }

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/login?sessionExpired=true', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};