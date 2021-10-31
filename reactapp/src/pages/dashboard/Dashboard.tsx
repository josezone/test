import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { deleteEmployee } from "../../services/deleteEmployee";
import { editEmployee } from "../../services/editEmployee";
import { fetchEmployees } from "../../services/fetchEmployees";
import { newEmployee } from "../../services/newEmployee";
import HomeUi from "../../ui/homeUi/homeUi";

let cleanData: any;
function Dashboard(props: any) {
  const [value, setValue] = useState<any>("");

  const result: any = useQuery(
    ["employees", value],
    fetchEmployees(value, setValue, props.axios),
    {
      enabled: typeof value === "string",
    }
  );

  if (
    result.error &&
    result.error.response &&
    result.error.response.status === 401
  ) {
    localStorage.removeItem("jwToken");
    props.history.push("/login");
  }

  const [dataMain, setData] = useState(JSON.stringify([]));

  const handleLogout = () => {
    localStorage.removeItem("jwToken");
    props.history.push("/login");
  };

  const saveUserQuery: any = useMutation(editEmployee, {});

  const saveEdit = (value: any, key: number, pKey: string) => {
    cleanData[key] = value;
    setData(JSON.stringify(cleanData));
    saveUserQuery.mutateAsync({
      ...value,
      pKey,
      axios: props.axios,
    });
  };

  const deleteQuery: any = useMutation(deleteEmployee, {});

  const onDelete = (key: number, pKey: string) => () => {
    cleanData.splice(key, 1);
    setData(JSON.stringify(cleanData));
    deleteQuery.mutateAsync({
      id: pKey,
      axios: props.axios,
    });
  };

  const newEmployeeQuery: any = useMutation(newEmployee, {});

  useEffect(() => {
    if (
      newEmployeeQuery.status === "success" &&
      newEmployeeQuery.data &&
      newEmployeeQuery.data.data
    ) {
      cleanData = [...cleanData, newEmployeeQuery.data.data];
      setData(JSON.stringify(cleanData));
    }
  }, [JSON.stringify(newEmployeeQuery?.data?.data)]);

  const sendNewUserRequest = (value: any) => {
    newEmployeeQuery.mutateAsync({ ...value, axios: props.axios });
  };

  const sendSearchRequest = (value: any) => {
    setValue(value.search);
  };

  useEffect(() => {
    if (result.data) {
      setData(JSON.stringify(result.data.data));
      cleanData = JSON.parse(JSON.stringify(result.data.data));
    }
  }, [JSON.stringify(result.data)]);

  return (
    <HomeUi
      handleLogout={handleLogout}
      sendNewUserRequest={sendNewUserRequest}
      data={dataMain}
      saveEdit={saveEdit}
      onDelete={onDelete}
      sendSearchRequest={sendSearchRequest}
    />
  );
}

export default Dashboard;
