import { makeStyles } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { useMemo } from 'react';
import { Controller, useFormContext, useFormState } from "react-hook-form";
import { IMaskInput, IMaskInputProps } from 'react-imask';


export interface MaskedInputFieldPropsInterface {
    fieldProps: TextFieldProps;    
    id: string;
    className?: string;
    maxLength?: number;
    maskProps: IMaskInputProps;
    defaultValue?: string;

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


export default function MaskedInputFields(props: MaskedInputFieldPropsInterface) {

    const { control } = useFormContext();
    const { errors } = useFormState({ control });

    const classes = useStyles();

    const getHelperText = (): string => {
        return errors.hasOwnProperty(props.id) ? errors[props.id].message : ''
    }

    const textFieldProps = useMemo(() => ({
        helperText: getHelperText(),
        id: props?.id,
        error: !!errors[props?.id],
        variant: props.fieldProps?.variant || 'outlined',
        margin: props.fieldProps?.margin || 'dense',
        classes: props.fieldProps.classes || classes
    }), [props])

    return (
        <div className={`field maskedInput ${props.id} ${props.className ? props.className : ''}`}>

            <Controller
                render={({ field }) => (
                    <TextField
                        {...field}
                        {...props.fieldProps}
                        {...textFieldProps}
                        onChange={() => { /* override onChange*/ }}
                        onBlur={event => {
                            field.onBlur();
                            if (props.events?.includes('onBlur') && props?.onBlur) props?.onBlur(event, props.id)
                        }}

                        InputProps={{
                            inputComponent: IMaskInput,
                            inputProps: {
                                ...props.maskProps,
                                unmask: true,
                                onAccept: (event: any) => {
                                    field.onChange(event);
                                    if (props.events?.includes('onChange') && props?.onChange) props?.onChange(event, props.id)
                                }
                            }
                        }}
                    />
                )}

                name={props.id}
                key={'controller' + props.id}
                control={control}
                defaultValue={props.defaultValue}
            />
        </div>

    );
}
