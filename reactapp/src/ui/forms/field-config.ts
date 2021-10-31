import { ElementType } from "react";
import InputFields from "./fields/InputField";
import { SecondaryButton } from "./fields/SecondaryButton";
import { SubmitButton } from "./fields/SubmitButton";

export const FieldConfig: {[key: string]: ElementType} = {
    input: InputFields,
    submitButton: SubmitButton,
    button: SecondaryButton
}