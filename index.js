const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/about", (req, res) => res.sendFile(__dirname + "/about.html"));
app.get("/contact-me", (req, res) =>
	res.sendFile(__dirname + "/contact-me.html")
);
app.get("*", (req, res) => {
	res.sendFile(__dirname + "/404.html", 404);
});
const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
// const { createServer } = require("node:http");
// const fs = require("fs");
// const url = require("node:url");

// const HOSTNAME = "localhost";
// const PORT = 8080;
// let statusCode = 200;

// const server = createServer((req, res) => {
// 	let parsedUrl = url.parse(req.url, true);
// 	let filename = `.${parsedUrl.pathname}`;

// 	fs.readFile(filename, (err, data) => {
// 		res.writeHead(statusCode, { "Content-Type": "text/html" });
// 		res.write(data);
// 		res.end();
// 	});
// }).listen(8080, "localhost", () => {
// 	console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
// });
