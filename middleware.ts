// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.url.includes('/api/simulator/socket')) {
    // Required for WebSocket upgrade
    const response = NextResponse.next();
    response.headers.set('Upgrade', request.headers.get('Upgrade') || '');
    response.headers.set('Connection', request.headers.get('Connection') || '');
    return response;
  }
  return NextResponse.next();
}