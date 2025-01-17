import connectMongoDB from '../../../lib/dbConnect';
import { NextResponse } from 'next/server';
import Products from '../../../Models/Products';

export async function GET() {
    try{
        await connectMongoDB();

        //Find all events
        const data = await Products.find();

        return NextResponse.json(data);
    }catch (error) {
        console.error('Erro ao buscar eventos:', error);
        return NextResponse.json({ message: 'Erro ao buscar eventos' }, { status: 500 });
    }
}