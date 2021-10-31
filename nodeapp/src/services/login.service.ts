import {getRepository} from 'typeorm';

export function loginService(userName: string) {
  return getRepository('User').findOne({
    userName,
  });
}
