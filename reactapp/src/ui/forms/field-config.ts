import { ElementType } from "react";
import { CheckBoxFields } from "./fields/checkboxField";
import InputFields from "./fields/InputField";
import MaskedInputFields from "./fields/maskedInputField";
import { RadioFields } from "./fields/radioField";
import { SecondaryButton } from "./fields/SecondaryButton";
import SelectFields from "./fields/selectField";
import { SubmitButton } from "./fields/SubmitButton";
import TextFields from "./fields/textField";

export const FieldConfig: {[key: string]: ElementType} = {
    input: InputFields,
    submitButton: SubmitButton,
    button: SecondaryButton,
    select: SelectFields,
    checkbox: CheckBoxFields,
    radio: RadioFields,
    text: TextFields,
    maskedInput: MaskedInputFields
}