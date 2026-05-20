import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./Routes/contactRoute";
import careerRoute from "./Routes/careerRoute";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", contactRoute);
app.use("/api", careerRoute);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
