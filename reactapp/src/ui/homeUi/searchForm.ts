export function searchForm(sendNewUserRequest: (value: any) => void) {
  return {
    fields: [
      {
        fieldType: "input",
        id: "search",
        fieldProps: {
          label: "Search",
          type: "text",
          autoComplete: "off",
          size: "small",
        },
      },
    ],
    buttons: [
      {
        buttonType: "submitButton",
        id: "search",
        label: "search",
        variant: "contained",
      },
    ],
    onSubmit: sendNewUserRequest,
  };
}
