const { createServer } = require("node:http");
const fs = require("fs");
const url = require("node:url");

const HOSTNAME = "localhost";
const PORT = 8080;

const server = createServer((req, res) => {
	let q = url.parse(req.url, true);
	let filename = `.${q.pathname}`;
	if (filename === "./") {
		filename = "./index.html";
	}

	fs.readFile(filename, (err, data) => {
		if (err) {
			res.writeHead(404, { "Content-Type": "text/html" });
			res.write("404");
			res.end();
		} else {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		}
	});
}).listen(8080, "localhost", () => {
	console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
