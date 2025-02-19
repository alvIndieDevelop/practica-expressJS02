import express, { Application } from "express";
import { createServer } from "http";
import "dotenv/config";
import { options } from "./config";

// middlewares
import cors from "cors";
import morgan from "morgan";

// routers
import Routers from "./router";

const PORT = options.PORT;

const app: Application = express();
const server = createServer(app);

// middlewares

// cors config
const allowOrigins = [options.BACKEND_URL, options.FRONENT_URL];
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routers
app.use(Routers);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
