import { Orgs, Valk } from "../../App";
import Valkyrie from "../Valkyrie";
import "./Organization.css"

type Props = {
    organization: Orgs,
    valks: Valk[],
}

const Organization = (props: Props) => {
    return (
        props.valks.length > 0 ? (<section className="org" style={{ backgroundColor: props.organization.secondColor }}>
            <h3 style={{ borderColor: props.organization.firstColor }}>{props.organization.name}</h3>
            <div className="valks">
                {props.valks.map(valk => <Valkyrie key={valk.name} valk={valk} bannerColor={props.organization.firstColor}/>)}
            </div>
        </section>) : null
    )
}

export default Organization;
