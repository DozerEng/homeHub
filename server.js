/*

Project Portfolio Server

*/

const fs = require('fs');
const http = require('http');
const https = require('https');
const app = require('./app');
const redirectApp = require('./redirectServer');

const hostname = process.env.HOSTNAME;

const http_port = process.env.HTTP_PORT; 
const https_port = process.env.HTTPS_PORT; 

// const httpsOptions = {
//     cert: fs.readFileSync(process.env.CRT),
//     ca: fs.readFileSync(process.env.CA_BUNDLE),
//     key: fs.readFileSync(process.env.KEY)
// };
//const httpsServer = https.createServer(httpsOptions, app);
//httpsServer.listen(https_port);
////httpsServer.listen(https_port, hostname);

/*
 * HTTP server: Set up plain HTTP server
 *
 */

const httpServer = http.createServer(app);
httpServer.listen(http_port);


/*
 * Redirect server: Send external requests from port 80 to port 443 (External ports)
 * - Ports configured in router at 192.168.0.1
 * - Point http port 80 at port this_Device:8081
 * - Redirect to https domain
 */

// const httpRedirect = http.createServer( redirectApp );
// httpRedirect.listen(9000);