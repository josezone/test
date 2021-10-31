import Typography from "@material-ui/core/Typography";
import { useMemo } from "react";
import ReactHtmlParser from 'react-html-parser';


export interface TextFieldPropsInterface {
    id: string;
    className: string;
    classes: object;
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit',
    paragraph: boolean;
    noWrap: boolean;
    gutterBottom: boolean;
    color: any;
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify',
    component: any;
    display: any;

    textContent: string;
}

export default function TextFields(props: TextFieldPropsInterface) {

    const selectFieldProps = useMemo(() => ({
        className: props?.className,
        classes: props?.classes || {},
        id: props?.id,
        variant: props?.variant,
        paragraph: props?.paragraph,
        noWrap: props?.noWrap,
        gutterBottom: props?.gutterBottom,
        color: props?.display,
        align: props?.align,
        component: props?.component,
        display: props?.display,
    }), [props]);

    return (
        <div className={`field text ${props.id} ${props?.className || ''}`} style={{width: '100%'}}>
            <Typography {...selectFieldProps} >{ReactHtmlParser(props?.textContent || '')}</Typography>
        </div>
    )
}