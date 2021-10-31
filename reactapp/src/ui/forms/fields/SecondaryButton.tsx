import Button from "@material-ui/core/Button";
import { ReactElement } from "react";

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
    id: string;
    onClick?: (event: object, id: string) => void;
}

export function SecondaryButton(props: ButtonPropsInterface) {
    return (
        <div className={`button ${props.className ? props.className : ''}`}>
            <Button
                classes={props?.classes}
                color={props?.color || 'default'}
                disabled={props?.disabled || false}
                disableElevation={props.disableElevation || false}
                disableFocusRipple={props?.disableFocusRipple}
                disableRipple={props?.disableRipple || false}
                endIcon={props?.endIcon}
                fullWidth={props?.fullWidth || false}
                href={props?.href}
                size={props?.size || 'medium'}
                startIcon={props?.startIcon}
                variant={props?.variant || 'text'}
                type={'button'}
                onClick={(e) => {
                    if(props?.onClick) props?.onClick(e, props.id);
                }}
            >
                {props?.label}
            </Button >
        </div>
    )
}