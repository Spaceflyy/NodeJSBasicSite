const { createServer } = require("node:http");
const fs = require("fs");
const url = require("node:url");

const HOSTNAME = "localhost";
const PORT = 8080;
let statusCode = 200;

const server = createServer((req, res) => {
	let q = url.parse(req.url, true);
	let filename = `.${q.pathname}`;

	switch (req.url) {
		case "/":
			filename = "./index.html";
			break;

		case "/about.html":
			filename = "./about.html";
			break;

		case "/contact-me.html":
			filename = "./contact-me.html";
			break;

		default:
			filename = "./404.html";
			statusCode = 404;
			break;
	}

	fs.readFile(filename, (err, data) => {
		res.writeHead(statusCode, { "Content-Type": "text/html" });
		res.write(data);
		res.end();
	});
}).listen(8080, "localhost", () => {
	console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
