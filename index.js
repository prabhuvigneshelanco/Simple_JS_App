const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const ip = req.socket.localAddress;
  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error loading index.html: ${err}`);
      return;
    }
    const html = data.replace("{ip}", ip);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
