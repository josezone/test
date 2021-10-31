import {getRepository} from 'typeorm';

export function editEmployeeService(
  address: string,
  age: string,
  email: string,
  employeeId: string,
  name: string,
  phone: string,
  id: number
) {
  return getRepository('Employee').update(
    {id},
    {
      address,
      age,
      email,
      employeeId,
      name,
      phone,
    }
  );
}
