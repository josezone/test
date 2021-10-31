export const fetchEmployees =
  (value: string, setValue: any, axios: any) => () => {
    return axios.get("/employees", { params: { query: value } });
  };
