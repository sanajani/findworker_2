import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname
    
    // const messangerPath = path === '/messanger'
    const publicPath = path === '/login' || path === '/signup'
    
    // it is message path
    const messagePath = path === '/messanger'
    
    const token = request.cookies.get('ourauthtoken')?.value || ''
    
    const hasLocalStorageAccess = typeof window === 'undefined';

    console.log("this is your localstorage middleware",hasLocalStorageAccess);
    // if not token then do that
    if(messagePath && !token){
      return NextResponse.redirect(new URL('/?page=1',request.nextUrl))
    }

    if(publicPath && token) {
        return NextResponse.redirect(new URL('/?page=1', request.nextUrl))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login','/signup','/messanger'],
}