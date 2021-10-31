export const registerRequest = ({ username, password, axios }: any) => {
  return axios.post("/register", {
    username,
    password,
  });
};
