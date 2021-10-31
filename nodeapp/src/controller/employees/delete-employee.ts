import {NextFunction, Request, Response} from 'express';
import {ReasonPhrases, StatusCodes} from 'http-status-codes';
import {deleteEmployeeService} from '../../services/deleteEmployee.service';

export async function deleteEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await deleteEmployeeService(Number(req.body.id));
    res.status(StatusCodes.OK).json(ReasonPhrases.OK);
  } catch (err) {
    next(err);
  }
}

export default deleteEmployee;
