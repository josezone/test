import { ConnectionOptions } from 'typeorm';
import getEnv from './envs';


const settings: ConnectionOptions[] = [
  {
  name:'default',
  type: 'mysql',
  host: getEnv('DB_HOST'),
  port: getEnv('DB_PORT'),
  username: getEnv('DB_USERNAME'),
  password: getEnv('DB_PASSWORD'),
  database: getEnv('DB_NAME'),
  logging: true,
  synchronize: true,
  entities: [__dirname + '/../model/entity/*.*'],
  subscribers: [__dirname + '/../modules/user/*.*'],
  migrations: [__dirname + '/../migrations/*.*'],
  cli: {
    entitiesDir: __dirname + '/../model/entity',
    subscribersDir: __dirname + '/../modules/user',
    migrationsDir: 'src/migrations',
  },
},
{
  name: 'seed',
  type: "mysql",
  host: getEnv('DB_HOST'),
  port: getEnv('DB_PORT'),
  username: getEnv('DB_USERNAME'),
  password: getEnv('DB_PASSWORD'),
  database: getEnv('DB_NAME'),
  logging: true,
  migrations: [__dirname + "/../seeds/*.*"],
  entities: [__dirname + '/../model/entity/*.*'],
  cli: {
    migrationsDir: 'src/seeds',
  }
}
];        

module.exports = settings;