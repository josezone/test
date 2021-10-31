import { FormState } from "react-hook-form";
import { FieldConfig } from "./field-config";


interface GenerateFieldsInterface {
    fields: Array<any>;
    formState: FormState<any>;
    formName?: string;
    buttons?: Array<any>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>, id: string) => void;
    onOpen?: (event: React.FocusEvent<HTMLInputElement>, id: string) => void;
    onClose?: (event: React.FocusEvent<HTMLInputElement>, id: string) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>, id: string) => void;
}

export function GenerateFields(props: GenerateFieldsInterface) {
    const { fields = [], buttons = [], formName = '', formState, onChange, onBlur, onOpen, onClose, onClick } = props;

    return (
        <div className="fieldContainer">
            {fields.map((fieldProps, index: number) => {
                const { fieldType, ...restProps } = fieldProps;
                const Field = FieldConfig[fieldType];
                if (Field) {
                    return <Field
                        key={fieldProps.id + index}
                        {...restProps}
                        index={index}
                        formState={formState}
                        onChange={onChange}
                        onBlur={onBlur}
                        onOpen={onOpen}
                        onClose={onClose}
                        onClick={onClick}
                    />
                } else {
                    return <div>Please provide a valid fieldType</div>
                }

            })}
            {
                buttons.length ? <div className={`buttonGroup ${formName}`}>
                    {buttons.map((buttonProps, index: number) => {
                        const { buttonType, ...restProps } = buttonProps;
                        const Button = FieldConfig[buttonType];
                        return (<Button
                            key={restProps.id + index}
                            {...restProps}
                        />)
                    })
                    }
                </div> : null
            }
        </div>
    )
}