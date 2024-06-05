import express from "express";
// import session from 'express-session'
import morgan from "morgan";
import cors from "cors";
import { connect } from "./configs/mongoConfig";
import routes from "./routes/gymBotRoutes";
import { connectAndQuery } from "./configs/PostgresConfig";
import { initDB } from "./configs/initDB_PG";

const app = express();
const PORT = process.env.PORT;
if (!PORT) {
  throw new Error("PORT is not defined");
}
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
// הגדרת ההגדרות של הסשן
// app.use(session({
//   secret: 'your_secret_key',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false } // יש להגדיר ל-true במעבר ל-HTTPS
// }));

app.set('view engine', 'ejs');

// Database connection and server start
const startServer = async () => {
  try {
    // await connectAndQuery();
    // await initDB();
    // await connect();
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1); // סגור את האפליקציה אם יש שגיאה בחיבור למסד הנתונים
  }
};

// Routes
app.use("/", routes);

startServer();
