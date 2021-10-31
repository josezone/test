import {NextFunction, Request, Response} from 'express';
import {ReasonPhrases, StatusCodes} from 'http-status-codes';
import {loginService} from '../../services/login.service';
import {hash} from 'bcrypt';
import getEnv from '../../config/envs';
import {registerService} from '../../services/register.service';

export async function registerUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {username, password} = req.body;
    const result: any = await loginService(username);
    if (result) {
      res.status(StatusCodes.OK).send(ReasonPhrases.OK);
      return;
    }
    const hashedPasword = await hash(password, getEnv('saltRounds'));
    await registerService(username, hashedPasword);
    res.status(StatusCodes.OK).send(ReasonPhrases.OK);
  } catch (err) {
    next(err);
  }
}
