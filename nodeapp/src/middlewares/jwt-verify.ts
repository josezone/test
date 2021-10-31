import {NextFunction,  Response} from 'express';
import {ReasonPhrases, StatusCodes} from 'http-status-codes';
import {verify} from 'jsonwebtoken';
import getEnv from '../config/envs';

export function jwtVerify(req: any, res: Response, next: NextFunction) {
  const auth = req.get('Authorization');
  if (!auth) {
    res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    return;
  }

  var parts = auth.split(' ');

  if (parts.length !== 2) {
    res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    return;
  }

  var scheme = parts[0];
  var token = parts[1];

  if (!/^Bearer$/i.test(scheme)) {
    res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    return;
  }

  try {
    var decoded:any = verify(token, getEnv('secret'));
    req.user = decoded.id;
    next();
    return;
  } catch (err) {
    res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
  }
}
