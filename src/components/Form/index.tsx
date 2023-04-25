import { Dispatch, FormEvent, useState } from "react";
import { Orgs, Valk } from "../../App";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextForm from "../TextForm";
import "./Form.css"

type Props = {
    onValkAdd: Dispatch<Valk>, 
    organizations: Orgs[]
}

const Form = (props: Props) => {
    const [name, setName] = useState("");
    const [signet, setSignet] = useState("");
    const [number, setNumber] = useState("");
    const [org, setOrg] = useState("");

    const onSave = (event: FormEvent) => {
        event.preventDefault();
        props.onValkAdd({
            name,
            signet,
            number,
            org,
        });
        setName("");
        setSignet("");
        setNumber("");
        setOrg("");
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Type the next flamechaser</h2>
                <TextForm 
                    required={true} 
                    label="Name" 
                    placeholder="Type the name." 
                    value={name} 
                    onChange={value => setName(value)}
                />

                <TextForm 
                    required={true} 
                    label="Signet" 
                    placeholder='Type the signet' 
                    value={signet} 
                    onChange={value => setSignet(value)} 
                />

                <TextForm 
                    required={true} 
                    label="Number" 
                    placeholder='Type the number.' 
                    value={number} 
                    onChange={value => setNumber(value)} 
                />

                <Dropdown
                    required={true} 
                    label="Organization" 
                    itens={props.organizations} 
                    value={org}
                    onChange={value => setOrg(value)}
                />

                <Button>
                    Add Person
                </Button>
            </form>
        </section>
    )
}

export default Form;
