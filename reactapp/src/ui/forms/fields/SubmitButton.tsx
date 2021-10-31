import Button from "@material-ui/core/Button";
import { ReactElement } from "react";
import { useFormContext, useFormState } from "react-hook-form";

export interface ButtonPropsInterface {
    label: string;
    classes?: object;
    color?: 'default' | 'inherit' | 'primary' | 'secondary',
    disabled?: boolean;
    disableElevation?: boolean;
    disableFocusRipple?: boolean;
    disableRipple?: boolean;
    endIcon?: ReactElement;
    fullWidth?: boolean;
    href?: string;
    size?: 'large' | 'medium' | 'small';
    startIcon?: ReactElement;
    variant?: 'contained' | 'outlined' | 'text';

    className: string;
}

export function SubmitButton(props: ButtonPropsInterface) {
    const { control } = useFormContext();
    const { isValid } = useFormState({ control });

    return (
        <div className={`submitButton ${props.className ? props.className : ''}`}>
            <Button
                classes={props?.classes}
                color={props?.color || 'default'}
                disabled={!isValid || false}
                disableElevation={props.disableElevation || false}
                disableFocusRipple={props?.disableFocusRipple}
                disableRipple={props?.disableRipple || false}
                endIcon={props?.endIcon}
                fullWidth={props?.fullWidth || false}
                href={props?.href}
                size={props?.size || 'medium'}
                startIcon={props?.startIcon}
                variant={props?.variant || 'text'}
                type={'submit'}
            >
                {props?.label}
            </Button >
        </div>
    )
}