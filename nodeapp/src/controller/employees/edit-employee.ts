import {NextFunction, Request, Response} from 'express';
import {ReasonPhrases, StatusCodes} from 'http-status-codes';
import {editEmployeeService} from '../../services/editEmployee.service';

export async function editEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {address, age, email, employeeId, name, id, phone} = req.body;
    const reault = await editEmployeeService(
      address,
      age,
      email,
      employeeId,
      name,
      phone,
      Number(id)
    );
    console.log(reault)
    res.status(StatusCodes.OK).send(ReasonPhrases.OK);
  } catch (err) {
    next(err);
  }
}

export default editEmployee;
