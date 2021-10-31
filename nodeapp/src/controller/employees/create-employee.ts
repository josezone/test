import {NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {createEmployeeService} from '../../services/createEmployee.service';

export async function createEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {address, age, email, employeeId, name, phone} = req.body;
    const result = await createEmployeeService(
      address,
      age,
      email,
      employeeId,
      name,
      phone
    );
    res.status(StatusCodes.OK).send(result);
  } catch (err) {
    next(err);
  }
}

export default createEmployee;
