const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end()
  } else if (req.url === "/about") {
    res.write("Here is our short history");
    res.end()
  } else{
  res.end(
    `<h1>ooOOps!</h1>
    <p>We can't seem to find the page that you are looking for</p>
    <a href="/">Go back to our home page</a>`)
  }
})

server.listen(8080);
