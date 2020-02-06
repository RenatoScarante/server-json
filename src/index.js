//https://www.npmjs.com/package/json-server
// server.js
const jsonServer = require("json-server");
const db = require('./db/db.js')();
const routes = require('./config/routes.json');
const serverPort = 3334;

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(jsonServer.rewriter(routes));
server.use(middlewares);
server.use(router);


server.listen(serverPort, () => {
  console.log(`JSON Server is running at port ${serverPort}`);
});
