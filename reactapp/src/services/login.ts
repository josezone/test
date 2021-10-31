export const loginRequest = ({ userName, passwords, axios }: any) => {
  return axios.post("/login", {
    userName,
    password: passwords,
  });
};
