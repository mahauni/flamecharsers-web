import { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./TextForm.css"

type Props = {
    required: boolean, 
    label: string, 
    placeholder: string, 
    value: string, 
    onChange: Dispatch<SetStateAction<string>>,
}


const TextForm = (props: Props ) => {

    const onDigit = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="text_field">
            <label>{props.label}</label>
            <input value={props.value} onChange={onDigit} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextForm;
