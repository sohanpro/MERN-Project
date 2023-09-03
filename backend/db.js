const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://admin:admin@cluster0.0ml6zvi.mongodb.net/foodDetails?retryWrites=true&w=majority';

async function connection() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected successfully to MongoDB');

    const adminCollection = await mongoose.connection.db.collection("admin");

    const data = await adminCollection.find({}).toArray() 
       
        const foodCatagoryData = await mongoose.connection.db.collection("Foodcategory");
        const CatData = await foodCatagoryData.find({}).toArray()
        global.CatagoryData = CatData;
       
        global.food_items = data;
        //console.log('Fetched Data:', global.food_items);
      
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connection;
