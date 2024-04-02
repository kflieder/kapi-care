import mongoose from 'mongoose';

export async function dbConnect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('connected to db');
        })

        connection.on('error', (err) => {
            console.log('error connecting to db' + err);
            process.exit();
        })

    } catch (error) {
       console.log('error connecting to db');
       console.log(error); 
    }
}