import { FormLabel, makeStyles } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import RadioGroup, { RadioGroupProps } from "@material-ui/core/RadioGroup";
import { useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";

export interface RadioPropsInterface {

    fieldProps: RadioProps;
    radioGroupProps: RadioGroupProps;

    className?: string;
    id: string;
    defaultValue?: boolean;
    options: { value: string; label: string }[];
    label?: string;

    events: Array<string>;
    onChange?: (event: object, id: string) => void;
}

const useStyles = makeStyles({
    root: {
        '& .MuiRadio-root': {
            color: '#5656564D'
        },
        '& .Mui-checked': {
            color: '#00C8FF'
        }
    }
})

export function RadioFields(props: RadioPropsInterface) {

    const classes = useStyles();

    const { control } = useFormContext();

    const selectFieldProps = useMemo(() => ({
        className: props?.className,
        id: props?.id,
    }), [props]);

    return (
        <div className={`field radio ${props.id} ${props.className ? props.className : ''}`}>
            <Controller
                rules={{ required: true }}
                control={control}
                defaultValue={props?.defaultValue}
                name={props.id}
                render={({ field }) => (
                    <>
                        {props.label ? <FormLabel component="legend">{props?.label}</FormLabel> : null}
                        <RadioGroup
                            {...field}
                            {...props.radioGroupProps}
                            value={field.value || props?.defaultValue || ''}
                            onChange={(e) => {
                                field.onChange(e);
                                if (props.events?.includes('onChange') && props.onChange) props.onChange(e, props.id);
                            }}
                        >
                            {props.options.map((option, index) => {
                                return (
                                    <FormControlLabel
                                        classes={props?.fieldProps?.classes || classes}
                                        key={option.label + index}
                                        value={option.value}
                                        control={<Radio {...selectFieldProps} {...props.fieldProps} color='primary' />}
                                        label={option.label}
                                    />
                                )
                            })}

                        </RadioGroup>
                    </>

                )}
            />

        </div>
    )
}



