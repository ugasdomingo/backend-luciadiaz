//Import Tools
import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";

//Import Routes
import authRouter from "./routes/authRouter";
import blogRouter from "./routes/blogRouter";
import registerRouter from "./routes/registerRouter";

//Define app
const app = express();

const allowedOrigins = [
	process.env.ORIGIN1 as string,
	process.env.ORIGIN2 as string,
];

//Middleware
app.use(
	cors({
		origin: function (origin: any, callback: any) {
			if (allowedOrigins.includes(origin)) {
				return callback(null, origin);
			}
			return callback(
				"Error CORS, origin: " + origin + ", No autorizado"
			);
		},
		credentials: true,
	})
);
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api", authRouter);
app.use("/api/blog", blogRouter);
app.use("/api/self-register", registerRouter);

//Export app
export default app;
