import connectMongoDB from '../../../lib/dbConnect';
import Events from '../../../Models/Events';

export async function GET() {
    try{
        await connectMongoDB();

        //Find all events
        const data = await Events.find();

        return Response.json(data);
    }catch (error) {
        console.error('Erro ao buscar eventos:', error);
        return Response.json({ message: 'Erro ao buscar eventos' }, { status: 500 });
    }
}