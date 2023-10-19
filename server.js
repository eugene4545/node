const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});

const PORT = 3000; //our designated port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
