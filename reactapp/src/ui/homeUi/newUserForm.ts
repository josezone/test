export function newUserForm(sendNewUserRequest: (value: any) => void) {
  return {
    fields: [
      {
        fieldType: "input",
        id: "employeeId",
        fieldProps: {
          label: "Employee Id",
          type: "text",
          autoComplete: "off",
          size: "small",
        },
        validations: [
          { type: "required", errorMessage: "Please enter Employee Id" },
        ],
        validationType: "string",
      },
      {
        fieldType: "input",
        id: "name",
        fieldProps: {
          label: "Name",
          type: "text",
          autoComplete: "off",
          size: "small",
        },
        validations: [{ type: "required", errorMessage: "Please enter name" }],
        validationType: "string",
      },
      {
        fieldType: "input",
        id: "email",
        fieldProps: {
          label: "email",
          type: "text",
          autoComplete: "off",
          size: "small",
        },
        validations: [
          { type: "required", errorMessage: "Please enter email" },
          { type: "email", errorMessage: "Should be a valid email" },
        ],
        validationType: "string",
      },
      {
        fieldType: "input",
        id: "address",
        fieldProps: {
          label: "address",
          type: "text",
          autoComplete: "off",
          size: "small",
        },
        validations: [{ type: "required", errorMessage: "Please enter name" }],
        validationType: "string",
      },
      {
        fieldType: "input",
        id: "age",
        fieldProps: {
          label: "age",
          type: "number",
          autoComplete: "off",
          size: "small",
        },
        validations: [{ type: "required", errorMessage: "Please enter name" }],
        validationType: "number",
      },
      {
        fieldType: "input",
        id: "phone",
        fieldProps: {
          label: "phone number",
          type: "number",
          autoComplete: "off",
          size: "small",
        },
        validations: [{ type: "required", errorMessage: "Please enter name" }],
        validationType: "number",
      },
    ],
    buttons: [
      {
        buttonType: "submitButton",
        id: "submit",
        label: "submit",
        variant: "contained",
      },
    ],
    onSubmit: sendNewUserRequest,
  };
}
