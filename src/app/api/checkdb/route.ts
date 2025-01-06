import { dbConnect } from '@/app/lib/dbConnect';
import { NextResponse } from 'next/server';
 
export async function GET() {
    try {
        const con = await dbConnect();
        if (con) {
            return new NextResponse('connected', { status: 200 });
        } else {
            return new NextResponse('failed to connect', { status: 500 });
        }
    } catch (error) {
        console.error(error);
        return new NextResponse('internal server error', { status: 500 });
    }
}