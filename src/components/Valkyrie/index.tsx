import { Valk } from "../../App"
import "./Valkyrie.css"

type Props = {
    valk: Valk,
    bannerColor: string,
}

const Valkyrie = (props: Props) => {
    return (
        <div className="valk">
            <div className="header" style={{ backgroundColor: props.bannerColor }}>
                <img src="https://github.com/mahauni.png" alt="Lucas Raoni" />
            </div>
            <div className="footer">
                <h4>{props.valk.name}</h4>
                <h5>Valkyrie {props.valk.number} with the signet {props.valk.signet}</h5>
            </div>
        </div>
    )
}

export default Valkyrie;
