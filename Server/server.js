import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import weatherRoute from "./routes/weather.routes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://weather-app-g6yu.vercel.app/"
  ],
  credentials: true
}));

app.use("/api/weather", weatherRoute);

app.get("/", (req,res)=> {
    res.send("Weather API is running....");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})