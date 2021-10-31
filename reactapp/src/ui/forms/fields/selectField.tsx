import { Controller, useFormContext, useFormState } from "react-hook-form";
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectProps } from '@material-ui/core/Select';
import { useMemo } from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";

export interface SelectFieldPropsInterface {

    fieldProps: SelectProps;

    id: string;
    defaultValue: string | number;
    classes: object;
    className?: string;
    options: Array<{ label: string, value: string }>
    
    events: Array<string>;
    onChange?: (event: object, id: string) => void;
    onOpen?: (event: object, id: string) => void;
    onClose?: (event: object, id: string) => void;
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        padding: '13px 14px',

    }
});

const useFormControlStyle = makeStyles({
    root: {
        width: '100%',
        margin: '8px 0 4px',
        '& svg': {
            color: '#00C8FF'
        },
        '& .MuiFormLabel-root': {
            top: '-6px'
        },
        '& .Mui-focused.MuiFormLabel-root': {
            top: 0
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: '#555555 solid 1px',
            borderRadius: 3
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '#555555 solid 2px',
            borderRadius: 3
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#555555',
            fontSize: 'medium'
        },
        '& .MuiSelect-outlined': {
            padding: '13px 14px'
        },
        '& .MuiFormLabel-filled': {
            top: 0
        }
    }
})

export default function SelectFields(props: SelectFieldPropsInterface) {

    const classes = useStyles();
    const formControlClasses = useFormControlStyle();

    const { control } = useFormContext();
    const { errors } = useFormState();
    const selectFieldProps = useMemo(() => ({
        id: props.id,
        classes: props.classes || classes,
        disabled: props.fieldProps.disabled || false,
        error: !!errors[props?.id],
        IconComponent: props.fieldProps.IconComponent || ExpandMoreOutlinedIcon
    }), [props]);

    const renderOptions = () => {
        return (
            props.options?.map((data: { label: string, value: string }, index: number) => {
                return (
                    <MenuItem key={data.label + index} value={data.value}>{data.label}</MenuItem>
                )
            }))
    }

    return (
        <div className={`field select ${props.id} ${props.className ? props.className : ''}`}>
            <FormControl
                variant={props.fieldProps.variant || 'outlined'}
                error={!!errors[props?.id]}
                classes={formControlClasses}
            >
                <InputLabel
                    id={props.fieldProps.label + props.id}
                    error={!!errors[props?.id]}
                >
                    {props.fieldProps.label}
                </InputLabel>
                <Controller
                    render={({ field }) => (
                        <Select
                            {...field}
                            {...props.fieldProps}
                            {...selectFieldProps}
                            onChange={(event) => {
                                field.onChange(event);
                                if (props.events?.includes('onChange') && props.onChange) props?.onChange(event, props.id)
                            }}
                            onClose={(event) => {
                                if (props.events?.includes('onClose') && props.onClose) props?.onClose(event, props.id)
                            }}
                            onOpen={(event) => {
                                if (props.events?.includes('onOpen') && props.onOpen) props?.onOpen(event, props.id)
                            }}
                        >
                            {renderOptions()}
                        </Select>
                    )}
                    name={props.id}
                    key={'controller' + props.id}
                    control={control}
                    defaultValue={props.fieldProps?.defaultValue || ''}
                />
                {!!errors[props.id] ? <FormHelperText>{errors[props.id].message}</FormHelperText> : null}
            </FormControl>
        </div>

    );

}