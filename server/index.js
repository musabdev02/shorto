import dotenv from "dotenv";
import express from "express";
import cors from "cors";
// other
import connectToDb from "./connect.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
connectToDb(process.env.MONGO_URL_LOCAL);

app.use(cors({
    origin: "http://localhost:5173",
    credentials: "true"
}));
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res)=> {
    res.send("hello")
})

app.listen(PORT, ()=> console.log(`Server started at port: ${PORT}`));
