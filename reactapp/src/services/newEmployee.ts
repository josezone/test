export const newEmployee = ({
    address,
    age,
    axios,
    email,
    employeeId,
    name,
    phone,
  }: any) => {
    return axios.post("/createEmployee", {
      address,
      age,
      email,
      employeeId,
      name,
      phone,
    });
  };
  