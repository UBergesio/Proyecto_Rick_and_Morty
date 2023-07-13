const http = require("http");
const utils  = require("./controllers/getCharById");
/* const data = require("./utils/data") */

const PORT = 3001;
http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  /* if (req.url.includes("rickandmorty/character")) {
    const id = req.url.split("/").at(-1);
    const idFinal = data.find((char) => char.id === Number(id))
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(idFinal));
  } */
  if (req.url.includes("/rickandmorty/character")) {
    const id = req.url.split("/").at(-1);
    utils.getCharById(res, id);
   }
  

}).listen(PORT, "localhost")
