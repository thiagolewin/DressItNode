import express from "express";
import cors from "cors";
import UserRouter from "./src/controllers/user-controller.js"
import WearRouter from "./src/controllers/post-controller.js"
import wearScraping from "./src/controllers/scraping-controller.js"
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", UserRouter);
app.use("/api/wear", WearRouter);
app.use("/api/scraping",wearScraping)
app.listen(port, () => {
    console.log("Listening on port 3000");
});