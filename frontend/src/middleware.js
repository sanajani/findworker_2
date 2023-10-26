import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname

    const publicPath = path === '/login' || path === '/signup'

    const token = request.cookies.get('ourauthtoken')?.value || ''

    if(publicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login','/signup'],
}