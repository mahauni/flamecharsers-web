import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { Orgs } from "../../App"
import "./Dropdown.css"

type Props = {
    required: boolean,
    label: string,
    itens: Orgs[],
    value: string,
    onChange: Dispatch<SetStateAction<string>>
}

const Dropdown = (props: Props) => {
    const onSelect= (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select onChange={onSelect} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => <option key={item.name}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;
