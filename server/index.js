const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// TODO - use passport.js
// TODO - use session store

// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);

// const sessionOptions = {
//   host: process.env.REDIS_PORT_6379_TCP_ADDR || 'localhost',
//   port: process.env.REDIS_PORT_6379_TCP_PORT || 6379
// };

// app.use(session({
//   resave: false,
//   saveUninitialized: false,
//   store: new RedisStore(sessionOptions),
//   // you must replace this!
//   secret: 'c1c5089b5928b7acd4903ccf7171836a'
// }));

app.use(morgan('combined'));
app.use(helmet());

app.use('/static', express.static(path.join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.listen(port, host, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`listening at ${host}:${port}`);
});
