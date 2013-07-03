var socketServer = require('./socketServer');
socketServer.init(process.env.PORT || 8080, 9000);
console.log("Server listening on port %d", process.env.PORT || 8080);