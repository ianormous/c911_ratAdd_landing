import { NextResponse, NextRequest } from 'next/server';
import { createClient } from 'redis';

export function middleware() {

}

export const config = {
    matcher: ['/api/test1', '/api/contact']
}