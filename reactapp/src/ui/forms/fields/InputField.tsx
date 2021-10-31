import { makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { useMemo } from 'react';
import { Controller, useFormContext, useFormState } from "react-hook-form";

export interface TextFieldPropsInterface {

    fieldProps: TextFieldProps;

    classes?: object;
    id: string;
    name: string;
    className?: string;
    defaultValue?: string

    events: Array<string>;
    onChange?: (event: object, id: string) => void
    onBlur?: (event: object, id: string) => void

}

const useStyles = makeStyles({
    root: {
      '& .MuiInputBase-input': {
          minHeight: 24,
      },
      '& .MuiFormLabel-root': {
          marginTop: 2.5
      },
      '& .Mui-focused': {
        marginTop: 0,
      },
      '& .MuiFormLabel-filled': {
        marginTop: 0
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
      }
      
    }
  });

export default function InputFields(props: TextFieldPropsInterface) {

    const classes = useStyles();

    const { control } = useFormContext();
    const { errors } = useFormState({ control });

    const getHelperText = (): string => {
        return errors.hasOwnProperty(props.id) ? errors[props.id].message : '';
    }

    const textFieldProps = useMemo(() => {
        return {
            helperText: getHelperText(),
            id: props?.id,
            error: !!errors[props?.id] && !!errors[props.id]?.message,
            name: props?.name,
            variant: props.fieldProps?.variant || 'outlined',
            classes: props.classes || classes,
            margin: props.fieldProps?.margin || 'dense'
        }
    }, [props])

    return (
        <div className={`field input ${props.id} ${props.className ? props.className : ''}`}>

            <Controller
                render={({ field }) => {
                    const textProps = {...field, ...props.fieldProps, ...textFieldProps  }
                    return (
                        <TextField
                            {...textProps}
                            onChange={(event => {
                                field.onChange(event);
                                if (props.events?.includes('onChange') && props.onChange) props?.onChange(event, props.id)
                            })
                            }
                            onBlur={event => {
                                field.onBlur();
                                if (props.events?.includes('onBlur') && props.onBlur) props?.onBlur(event, props.id)
                            }}
                            value={textProps?.value || ""}
                        />
                    )
                   
                }}

                name={props.id}
                key={'controller' + props.id}
                control={control}
                defaultValue={props.defaultValue || null}
            />
        </div>

    );
}
