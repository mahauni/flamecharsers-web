import { FormEvent } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextForm from "../TextForm";
import "./Form.css"

const Form = () => {

    const times = [
        "Anti-entropy",
        "Schicksal",
        "Fire Moth",
        "World Serpent",
        "Flamechaser",
    ]

    const onSave = (event: FormEvent) => {
        event.preventDefault();
        console.log("Form was submited");
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Type the next flamechaser</h2>
                <TextForm required={true} label="Name" placeholder="Type the name." />
                <TextForm required={true} label="Signet" placeholder='Type the signet' />
                <TextForm required={true} label="Number" placeholder='Type the number.' />
                <Dropdown required={true} label="Organization" itens={times} />
                <Button>
                    Add Person
                </Button>
            </form>
        </section>
    )
}

export default Form;
