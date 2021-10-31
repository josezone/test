export const deleteEmployee = ({ id, axios }: any) => {
  return axios.post("/deleteEmployee", {
    id,
  });
};
