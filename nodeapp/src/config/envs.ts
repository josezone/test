import dotenv from 'dotenv';
dotenv.config();

const envList: {[key: string]: any} = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '5050',
  DB_HOST: process.env.DB_HOST || '',
  DB_PORT: process.env.DB_PORT || '',
  DB_USERNAME: process.env.DB_USERNAME || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || '',
  secret: process.env.SECRET || 'abc',
  saltRounds: Number(process.env.SALT) || 10,
};

export function getEnv(envType: string) {
  return envList[envType];
}

export default getEnv;
