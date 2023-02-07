import mongoose from 'mongoose';

// const connectDB = (url) => {
//   mongoose.set('strictQuery', true);
//   mongoose.connect(url)
//     .then(() => console.log('connected to mongo'))
//     .catch((err) => {
//       console.error('failed to connect with mongo');
//       console.error(err);
//     });
// };


const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  };

  export default connectDB;

