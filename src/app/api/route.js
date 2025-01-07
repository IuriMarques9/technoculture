import database from '../lib/dbConnect'
import Newsletter from '../models/newsletter'

export async function GET(req) {
    try {
      await database.connect();
      return new Response(JSON.stringify({ message: 'Conectado com sucesso' }), { status: 200 });
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
      return new Response(JSON.stringify({ message: 'Erro ao conectar ao banco de dados' }), { status: 500 });
    } finally {
        await database.disconnect()
    }
  }

export async function POST(req) {
    try {
      // Conectar ao banco de dados
      await database.connect();
  
      // Ler os dados do corpo da requisição
      const body = await req.json();
  
      // Aqui você poderia usar um modelo do Mongoose para salvar os dados, ex:
        const newData = await Newsletter.create(body);
  
      return new Response(JSON.stringify({ message: 'Dados recebidos com sucesso!', data: newData }), { 
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Erro ao processar o POST:', error);
      return new Response(JSON.stringify({ message: 'Erro ao processar a requisição.' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    } finally {
        await database.disconnect()
    }
}