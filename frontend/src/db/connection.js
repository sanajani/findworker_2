import mongoose from 'mongoose';

const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    return;
  }

  try {
    // Establish a new connection
    const db = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Store the connection object
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

export default connectDB;