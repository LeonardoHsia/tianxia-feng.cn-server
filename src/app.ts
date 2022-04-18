import { IncomingMessage, ServerResponse } from "http";
import { RequestOptions } from "https";

// import testAxios from "./test/axios";

// console.log(testAxios);

const https = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = https.createServer(
	(req: IncomingMessage, res: ServerResponse) => {
		console.log(req.url);
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/plain");
		res.end("Hello World");
	}
);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});

const options: RequestOptions = {
	hostname,
	port,
	path: "/todos",
	method: "GET",
};

const req = https.request(
	options,
	(req: IncomingMessage, res: ServerResponse) => {
		console.log("Incoming Request", req);

		console.log("状态码：", res.statusCode);

		res.on("data", d => {
			process.stdout.write(d);
		});
	}
);

req.on("error", (error: Error) => {
	console.error(error);
});
