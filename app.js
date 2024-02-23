const http = require("http");
const fs = require("fs");
const calculateGPA = require("./server/server");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Error loading index.html");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.url === "/calculateGPA") {
    let body = [];
    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        const formData = JSON.parse(body);
        const grades = formData.grades;
        const unitLoads = formData.unitLoads;
        const gpa = calculateGPA(grades, unitLoads);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ gpa }));
      });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
