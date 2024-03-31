import mongoose from "mongoose";

export async function connectToDb() {
    try {
        mongoose.connect(process.env.MONGODB_URL!);

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Database is connected successfully");
        });
        connection.on('error', (err) => {
            console.log('Database is not connected:' + err);
            process.exit();
        });

    } catch (error) {
        console.log("Something went wrong in connecting to DB")
        console.log(error)
    }
};