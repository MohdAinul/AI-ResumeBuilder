import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Database connection
await connectDb();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("server is live...."));
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

app.listen(PORT, () => {
  console.log(`server us running on port ${PORT}`);
});
