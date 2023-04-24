import "./Dropdown.css"

const Dropdown = (props: { required: boolean, label: string, itens: string[] }) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;
