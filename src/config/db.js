import mongoose from 'mongoose';

export const connectDB= async()=>{
    try {
        const dbURI= process.env.MONGODB_URI;
        await mongoose.connect(dbURI);
        console.log('Conectado a la base de datos MongoDB:', mongoose.connection.name);
    } catch (error) {
        console.error('Error al conectar a la base de datos MongoDB:', error);
        process.exit(1);
    }
}