import { debug } from "node:console";

import app from "./app";

const port = process.env.PORT ?? 3000;

const server = app.listen(port, () => {
	debug(`App listening on port ${port}`);
});

function shutDown(signal: NodeJS.Signals) {
	debug(`Received ${signal}. Shutting down server`);
	server.close((err) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		debug("Closed out remaining connections");
		process.exit(0);
	});
}

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);

export default server;
