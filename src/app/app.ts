import compression from "compression";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());

app.get("/", (_req: Request, res: Response) => {
	res.status(200).send("Hello World!");
});

app.get("/ping", (_req: Request, res: Response) => {
	res.status(200).send("pong");
});

app.get("/health", (_req: Request, res: Response) => {
	// This is where you would add a health check for your infrastructure components.
	res.status(204).send();
});

app.use((_req: Request, res: Response, _next: NextFunction) => {
	res.status(404).send();
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err);
	res.status(500).send();
});

export default app;
