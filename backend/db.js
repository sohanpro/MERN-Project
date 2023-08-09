const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://admin:admin@cluster0.0ml6zvi.mongodb.net/foodDetails?retryWrites=true&w=majority';

async function connection() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected successfully to MongoDB hi');
    const FetchData = await mongoose.connection.db.collection("admin");
    const data = await FetchData.find({}).toArray()
    console.log(data)
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connection;
