import connectMongoDB from '../../../lib/dbConnect';
import Newsletter from '../../../Models/Newsletter';


export async function POST(req) {
  const { email } = await req.json();

  try{
    await connectMongoDB(); // Conectar ao banco de dados
        
    await Newsletter.create({email});
    
    return new Response(JSON.stringify({ message: 'Dados recebidos com sucesso!'} ), { status: 201 });
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    return Response.json({ message: 'Erro ao enviar dados' }, { status: 500 });
  }
}