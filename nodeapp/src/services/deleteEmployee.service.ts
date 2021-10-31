import {getRepository} from 'typeorm';

export function deleteEmployeeService(id: number) {
  return getRepository('Employee').softRemove({id})
}
