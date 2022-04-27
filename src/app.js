import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import { createServer } from 'http';
import logger from 'morgan';

import indexRouter from './routes/index';


(async function () {
  // Setup Express
  var app = express();


  // Setup httpServer
  const httpServer = createServer(app);

  // Setup and Start ApolloServer
  // const server = new ApolloServer({
  //   schema,
  //   context: ({ req, res }) => ({ req, res }),
  //   introspection: true,
  // });
  // await server.start();

  // Setup Middleware
  // server.applyMiddleware({ app });

  // Setup logger, urlencoder, cookieparser and static
  app.use(logger('dev'));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  // Setup some dev/test enpoints
  app.use('/', indexRouter);

  // Setup catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // Setup error handler
  app.use(function (err, req, res, next) {
    console.error(err);
    return res.status(err.status).json({ message: err.message });
  });

  const PORT = 3000;
  httpServer.listen(
    PORT,
    () =>
    console.log(`Server is now running on http://localhost:${PORT}/graphql`) // eslint-disable-line
  );
})();