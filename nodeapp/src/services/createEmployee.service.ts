import {getRepository} from 'typeorm';

export function createEmployeeService(
  address: string,
  age: string,
  email: string,
  employeeId: string,
  name: string,
  phone: string
) {
  return getRepository('Employee').save({
    address,
    age,
    email,
    employeeId,
    name,
    phone,
  });
}
