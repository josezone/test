import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {getEmployeeService} from '../../services/getEmployee.service';

export async function getEmployees(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.query.query) {
      const result = await getEmployeeService(req.query.query as string);
      res.status(StatusCodes.OK).json(result);
    } else {
      const result = await getEmployeeService(null);
      res.status(StatusCodes.OK).send(result);
    }
  } catch (err) {
    next(err);
  }
}

export default getEmployees;
