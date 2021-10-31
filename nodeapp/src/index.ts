import http from 'http';
import {appServer} from './app-server';
import getEnv from './config/envs';
import logger from './utils/logger';

appServer('../routes').then(app => {
  const server = http.createServer(app);
  server
    .listen(getEnv('port'), () => {
      logger.info(`Server started at port :${getEnv('port')}`);
    })
    .on('error', err => {
      logger.error(err);
      process.exitCode = 1;
    });
});
