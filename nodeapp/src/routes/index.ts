import {Router} from 'express';
import createEmployee from '../controller/employees/create-employee';
import deleteEmployee from '../controller/employees/delete-employee';
import editEmployee from '../controller/employees/edit-employee';
import getEmployees from '../controller/employees/get-employees';
import healthCheck from '../controller/health-check/health-check';
import {loginUser} from '../controller/user/login';
import {registerUser} from '../controller/user/register';
import {jwtVerify} from '../middlewares/jwt-verify';

const router: Router = Router();
export function routes() {
  router.get('/health-check', healthCheck);
  router.post('/login', loginUser);
  router.post('/register', registerUser);
  router.get('/employees', jwtVerify, getEmployees);
  router.post('/deleteEmployee', jwtVerify, deleteEmployee);
  router.post('/editEmployee', jwtVerify, editEmployee);
  router.post('/createEmployee', jwtVerify, createEmployee);
  return router;
}

export default routes;
