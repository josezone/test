export const editEmployee = ({
  address,
  age,
  axios,
  email,
  employeeId,
  name,
  pKey,
  phone,
}: any) => {
  return axios.post("/editEmployee", {
    address,
    age,
    email,
    employeeId,
    name,
    id: pKey,
    phone,
  });
};
