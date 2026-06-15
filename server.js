const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 8080);
const host = "0.0.0.0";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function localUrls() {
  const urls = [];
  const interfaces = os.networkInterfaces();
  Object.values(interfaces).forEach((items) => {
    (items || []).forEach((item) => {
      if (item.family === "IPv4" && !item.internal) {
        urls.push(`http://${item.address}:${port}/`);
      }
    });
  });
  urls.push(`http://127.0.0.1:${port}/`);
  return urls;
}

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "content-type": type,
    "cache-control": "no-store"
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://localhost:${port}`);
  if (requestUrl.pathname === "/access-url") {
    const urls = localUrls();
    send(res, 200, JSON.stringify({ primary: urls[0], urls }), types[".json"]);
    return;
  }

  const pathname = decodeURIComponent(requestUrl.pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const filePath = path.resolve(root, relativePath);

  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
    send(res, 403, "Acesso negado.");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      send(res, 404, "Arquivo não encontrado.");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "content-type": types[ext] || "application/octet-stream",
      "cache-control": "no-store"
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(port, host, () => {
  console.log("Operação Fluxo 8 disponível em:");
  localUrls().forEach((url) => console.log(`  ${url}`));
});
