import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { useMemo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import ReactHtmlParser from 'react-html-parser';


export interface CheckboxPropsInterface {

    fieldProps: CheckboxProps;

    className?: string;
    id: string;
    defaultValue?: boolean;
    label: string;
    preventLabelClick?: boolean;

    events: Array<string>;
    onChange?: (event: object, id: string) => void;
}

const useStyles = makeStyles({
    root: {
        
    }
})


export function CheckBoxFields(props: CheckboxPropsInterface) {

    const classes = useStyles();

    const { control } = useFormContext();

    const selectFieldProps = useMemo(() => ({
        classes: props.fieldProps?.classes || classes,
        id: props?.id,
        color: props?.fieldProps?.color || 'primary'
    }), [props]);

    return (
        <div className={`field checkBox ${props.id} ${props.className ? props.className : ''}`}>
            <FormControlLabel
                control={
                    <Controller
                        render={({ field }) => (
                            <Checkbox
                                { ...field }
                                { ...selectFieldProps }
                                { ...props.fieldProps }
                                onChange={(event => {
                                    field.onChange(event);
                                    if (props.events?.includes('onChange') && props.onChange) props?.onChange(event, props.id)
                                })
                                }
                            />
                            )}
                        name={props.id}
                        key={'controller' + props.id}
                        control={control}
                        defaultValue={props?.defaultValue}
                    />
                }
                label={props?.preventLabelClick ? null : ReactHtmlParser(props?.label || '')}
            />

            {props?.preventLabelClick ? <span className="checkbox-label">{ReactHtmlParser(props?.label || '')}</span> : null}

        </div>
    )
}