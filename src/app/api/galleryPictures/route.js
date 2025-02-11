import connectMongoDB from '../../../lib/dbConnect';
import GalleryPictures from '../../../Models/GalleryPictures';

export async function GET() {
    try{
        await connectMongoDB();

        //Find all events
        const data = await GalleryPictures.find();

        return Response.json(data);
    }catch (error) {
        console.error('Erro ao buscar eventos:', error);
        return Response.json({ message: 'Erro ao buscar eventos' }, { status: 500 });
    }
}