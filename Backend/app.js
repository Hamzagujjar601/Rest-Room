import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbconnection } from "./data-base/DB_Conmection.js"
import { errorMiddleWare } from "./Error/error.js"
import reservation from "./Router/reservationRouter.js"

const app = express();

dotenv.config({ path: "./config/config.env" });
const Front_Url = process.env.Front_URL;
app.use(
    cors({
        origin: [Front_Url],
        methods: ["POST"],
        credentials: [true]
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbconnection();

app.use(errorMiddleWare);
app.use("api/v1/reservation", reservation);

export default app;