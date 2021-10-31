import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { loginRequest } from "../../services/login";
import { registerRequest } from "../../services/register";
import { Login, StyledStyleLogin, LoginConstant, Forms } from "../../ui";
import { loginForm, registerForm } from "./formData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage(props: any) {
  if (localStorage.getItem("jwToken")) {
    props.history.push("/dashboard");
  }

  const [register, setRegister] = useState(false);

  function registerNewUser() {
    setRegister(true);
  }

  const loginQuery: any = useMutation(loginRequest, {});

  function sendLoginRequest(value: any) {
    loginQuery.mutateAsync({
      ...value,
      axios: props.axios,
    });
  }

  const registerQuery = useMutation(registerRequest, {});

  function sendRegisterRequest(value: any) {
    registerQuery.mutateAsync({
      ...value,
      axios: props.axios,
    });
  }

  function loginUser() {
    setRegister(false);
  }

  if (loginQuery.isError) {
    toast("Login Failed");
  }

  if (loginQuery.data && loginQuery.data.data && loginQuery.data.data.jwt) {
    localStorage.setItem("jwToken", loginQuery.data.data.jwt);
    props.history.push("/dashboard");
  }

  if (registerQuery.status === "success") {
    toast("Registeration success");
  }

  return (
    <Login LoginStyle={StyledStyleLogin} loginConstants={LoginConstant}>
      {loginQuery.isError && <ToastContainer />}
      {registerQuery.status === "success" && <ToastContainer />}
      {register ? (
        <Forms {...registerForm(loginUser, sendRegisterRequest)} />
      ) : (
        <Forms {...loginForm(registerNewUser, sendLoginRequest)} />
      )}
    </Login>
  );
}

export default LoginPage;
