import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { GenerateFields } from "./GenerateFields";

import { yupResolver } from '@hookform/resolvers/yup';
import Validator from "./validator";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

export interface FormPropsInterface {
    getFormMethods?: ({ ...ExportFormMethodsProps }) => void,
    fields: Array<any>;
    formName?: string;
    buttons?: Array<any>
    onSubmit?: (data: any) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>, id: string) => void;
    onOpen?: (event: React.FocusEvent<HTMLInputElement>, id: string) => void;
    onClose?: (event: React.FocusEvent<HTMLInputElement>, id: string) => void;
    onClick?: (event: React.MouseEvent<HTMLInputElement>, id: string) => void;
}

const getValidationSchema = (fields: Array<any>) => {
    const validator = new Validator(fields)
    return validator.generateFieldSchema()
                    .generateSchema();
}


const theme = createTheme({
    palette: {
        primary: { main: '#00C8FF' },
        secondary: { main: '#555555' },
        error: { main: '#F01E46' }
    },
});


export function Forms(props: FormPropsInterface) {

    const methods = useForm({
        resolver: yupResolver(getValidationSchema(props.fields)),
        mode: 'onChange'
    });

    const {
        handleSubmit,
        formState
    } = methods;

    function onSubmit<T>(data: T): void {
        if(props?.onSubmit) props.onSubmit(data);
    }

    useEffect(() => {
        if (props.getFormMethods) {
            props.getFormMethods({ ...methods })
        }
    }, [])

    return (
        <MuiThemeProvider theme={theme}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <GenerateFields
                        {...props}
                        formState={formState}
                    />
                </form>
            </FormProvider>
        </MuiThemeProvider>

    );
};

export default Forms;