import {getRepository} from 'typeorm';

export function registerService(userName: string, password: string) {
  return getRepository('User').save({userName, password});
}
