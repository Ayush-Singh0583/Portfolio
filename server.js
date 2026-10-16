/*
 * AYUSH — Luxury Scroll-Driven Developer Portfolio Server
 * -------------------------------------------------------
 * Serves the single-page site from /public (port 3000, or next free port).
 */

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

/* Port fallback */
function tryListen(port, triesLeft) {
  const server = app.listen(port);
  let failed = false;

  server.on('error', function (err) {
    failed = true;
    if (err.code === 'EADDRINUSE' && triesLeft > 0) {
      console.warn(`Port ${port} is currently in use — attempting port ${port + 1}...`);
      tryListen(port + 1, triesLeft - 1);
    } else {
      console.error(`Could not start server: ${err.message}`);
      process.exit(1);
    }
  });

  server.on('listening', function () {
    setImmediate(function () {
      if (!failed && server.listening) {
        console.log(`\n======================================================`);
        console.log(` AYUSH — Luxury Developer Portfolio is LIVE`);
        console.log(` Server running at http://localhost:${port}`);
        console.log(`======================================================\n`);
      }
    });
  });
}

tryListen(3000, 8);
