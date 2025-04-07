import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// other
import connectToDb from "./connect.js";
import urlRouter from "./routes/url.js";
import userRouter from "./routes/user.js";
import userUrlRouter from "./routes/userUrl.js";
// middlewares
import { checkAuthUser } from "./middlewares/auth.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
connectToDb(process.env.MONGO_URL_LOCAL);

app.use(cors({
    origin: ["http://localhost:5173", "http://192.168.0.104:5173"],
    credentials: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// routers
app.use("/api/url", urlRouter);
app.use("/api/user", userRouter);
app.use("/api/user/url", checkAuthUser, userUrlRouter);

app.listen(PORT, ()=> console.log(`Server started at port: ${PORT}`));
