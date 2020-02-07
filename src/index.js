//https://www.npmjs.com/package/json-server
// server.js
const jsonServer = require("json-server");
const db = require('./db/db.js')();
const routes = require('./config/routes.json');
const serverPort = 3334;

let isAuthenticated = false;

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

//server.use(jsonServer.rewriter(routes));


// the logout endpoint
server.get( '/user/logout', function ( req, res ) {
  isAuthenticated = false;
  res.status(200).send('logged out');
} );

// the login endpoint
server.get( '/user/login', function ( req, res ) {
  isAuthenticated = true;
  res.status(200).send('logged in');
} );

//your Authentication middleware (simplified to check the variable directly
// feel free to go back to the function approach if your authentication checks are more complex
server.use( function ( req, res, next ) {
  if ( isAuthenticated ) {
    next();
  } else {
    res.status( 401 ).send( "Unauthorized!" )
  }
} );

server.use(middlewares);
server.use("/api", router);

server.listen(serverPort, () => {
  console.log(`JSON Server is running at port ${serverPort}`);
});
