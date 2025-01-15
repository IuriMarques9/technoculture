
import connectMongoDB from '../../../lib/dbConnect';
import Newsletter from '../../../Models/Newsletter';
import { NextResponse } from 'next/server';


export async function POST(req) {
  const { email } = await req.json();

  try{
    await connectMongoDB(); // Conectar ao banco de dados
        
    await Newsletter.create({email});
    
    return new NextResponse(JSON.stringify({ message: 'Dados recebidos com sucesso!'} ), { status: 201 });
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    return NextResponse.json({ message: 'Erro ao enviar dados' }, { status: 500 });
  }
}