import { loginDal } from "./DAL/usersDAL";
import express from "express";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes";
// import productsRoutes from './routes/productsRoutes'
import categoriesRoutes from "./routes/productsRoutes";
// import cartsRoutes from './routes/cartsRoutes'
// import authRoutes from './routes/auth';
import { connect } from "./configs/mongoConfig";
import morgan from "morgan";
import mongoose from "mongoose";
// import Product from './models/Product'

const app = express();
app.use(express.json());
app.use(morgan("dev"));
const PORT = 3000;
app.use(
  cors({
    origin: "*",
  })
);

// routes
// app.use("/", usersRoutes);
// app.use("/", categoriesRoutes);
app.use("/", categoriesRoutes);

const connectANDlisten = async () => {
  try {
    // await connect()
    // await client.connect();
    // await connectDB()
    // console.log('Connecting to mongodb');
    // const db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};
connectANDlisten();
