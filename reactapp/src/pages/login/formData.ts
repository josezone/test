export function loginForm(
  registerNewUser: () => void,
  sendLoginRequest: (value: { userName: string; password: string }) => void
) {
  return {
    fields: [
      {
        fieldType: "input",
        id: "userName",
        fieldProps: {
          label: "user name",
          type: "text",
          autoComplete: "off",
          size: "small",
        },
        validations: [
          { type: "required", errorMessage: "Please enter user name" },
        ],
        validationType: "string",
      },
      {
        fieldType: "input",
        id: "passwords",
        validations: [
          { type: "required", errorMessage: "Please enter password" },
        ],
        validationType: "string",
        fieldProps: {
          label: "password",
          type: "password",
          autoComplete: "off",
        },
      },
    ],
    buttons: [
      {
        buttonType: "submitButton",
        id: "submit",
        label: "submit",
        variant: "contained",
      },
      {
        buttonType: "button",
        id: "register",
        label: "Register",
        variant: "contained",
        onClick: registerNewUser,
      },
    ],
    onSubmit: sendLoginRequest,
  };
}

export function registerForm(
  loginUser: () => void,
  sendRegisterRequest: (value: any) => void
) {
  return {
    fields: [
      {
        fieldType: "input",
        id: "username",
        fieldProps: {
          label: "username",
          type: "text",
          autoComplete: "off",
          size: "small",
        },
        validations: [
          { type: "required", errorMessage: "Please enter username" },
        ],
        validationType: "string",
      },
      {
        fieldType: "input",
        id: "password",
        validations: [
          { type: "required", errorMessage: "Please enter password" },
        ],
        validationType: "string",
        fieldProps: {
          label: "password",
          type: "password",
          autoComplete: "off",
        },
      },
      {
        fieldType: "input",
        id: "confirmPassword",
        validations: [
          { type: "required", errorMessage: "Please enter password" },
          {
            type: "test",
            errorMessage: "Passwords should match",
            customCheck: (params: any) => {
              return params.parent.password === params.originalValue;
            },
          },
        ],
        validationType: "string",
        fieldProps: {
          label: "confirm password",
          type: "password",
          autoComplete: "off",
        },
      },
    ],
    buttons: [
      {
        buttonType: "submitButton",
        id: "submit",
        label: "submit",
        variant: "contained",
      },
      {
        buttonType: "button",
        id: "login",
        label: "Login",
        variant: "contained",
        onClick: loginUser,
      },
    ],
    onSubmit: sendRegisterRequest,
  };
}
