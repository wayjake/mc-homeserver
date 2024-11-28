import http from "http";

// Define the port
const PORT = 42069;

// Create a basic server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Respond with a simple message
  res.end(`
    <h1> Hello, World! </h1>
    <strong>From port:</strong> ${PORT}.
  `);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
});
