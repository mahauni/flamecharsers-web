import "./TextForm.css"

const TextForm = (props: { required: boolean, label: string, placeholder: string }) => {
    return (
        <div className="text_field">
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextForm;
