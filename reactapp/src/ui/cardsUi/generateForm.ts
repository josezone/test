export function cardsForm(
  props: any,
  sendEditRequest: (value: any) => void
) {
  return {
    fields: [
      {
        fieldType: "input",
        id: "employeeId",
        defaultValue: props.employeeId,
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
        defaultValue: props.name,
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
        defaultValue: props.email,
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
        defaultValue: props.address,
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
        defaultValue: props.age,
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
        defaultValue: props.phone,
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
    onSubmit: sendEditRequest,
  };
}
