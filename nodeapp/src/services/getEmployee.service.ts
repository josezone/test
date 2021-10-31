import {getRepository, Like} from 'typeorm';

export function getEmployeeService(search: string | null) {
  if (search) {
    return getRepository('Employee').find({
      where: [
        {name: Like(`%${search}%`)},
        {email: Like(`%${search}%`)},
        {employeeId: Like(`%${search}%`)},
        {address: Like(`%${search}%`)},
        {age: Like(`%${search}%`)},
        {phone: Like(`%${search}%`)},
      ],
    });
  }
  return getRepository('Employee').find();
}
