import {compare} from 'bcrypt';
import {NextFunction, Request, Response} from 'express';
import {ReasonPhrases, StatusCodes} from 'http-status-codes';
import {sign} from 'jsonwebtoken';
import getEnv from '../../config/envs';
import {loginService} from '../../services/login.service';

export async function loginUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {userName, password}: {[key: string]: string} = req.body;
    const result: any = await loginService(userName);
    if (!result) {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
      return;
    }
    const validUser = await compare(password, result.password);
    if (!validUser) {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
      return;
    }
    const jwt = sign(
      {
        id: result.id,
      },
      getEnv('secret'),
      {expiresIn: '1h'}
    );
    res.status(StatusCodes.OK).send({jwt});
  } catch (err) {
    next(err);
  }
}
