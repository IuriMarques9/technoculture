import connectMongoDB from '../../../lib/dbConnect';
import Products from '../../../Models/Products';

export async function GET() {
    try{
        await connectMongoDB();

        //Find all products
        const data = await Products.find();

        return Response.json(data);
    }catch (error) {
        console.error('Erro ao buscar eventos:', error);
        return Response.json({ message: 'Erro ao buscar eventos' }, { status: 500 });
    }
}