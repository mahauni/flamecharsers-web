import Profile from './components/Profile';
import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react';
import Organization from './components/Organization';

export type Valk = {
    name: string,
    signet: string,
    number: string,
    org: string,
}

// make a type for the organizations
export type Orgs = {
    name: string,
    firstColor: string,
    secondColor: string;
}

function App() {
    const [valk, setValk] = useState<Valk[]>([]);

    const onNewValkAdd = (valkyrie: Valk) => {
        console.log(valkyrie);
        setValk([...valk, valkyrie]);
    }

    const organizations: Orgs[] = [
        {
            name: "Anti-entropy",
            firstColor: "#DB6EBF",
            secondColor: "#FAE9F5",
        },
        {
            name: "Schicksal",
            firstColor: "#FF8A29",
            secondColor: "#FFEEDF",
        },
        {
            name: "Fire Moth",
            firstColor: "#E06B69",
            secondColor: "#FDE7E8",
        },
        {
            name: "World Serpent",
            firstColor: "#57C278",
            secondColor: "#D9F7E9",
        },
        {
            name: "Flamechasers",
            firstColor: "#82CFFA",
            secondColor: "#E8F8FF",
        },
    ]

    return (
        <div className="App">
            <Banner />
            <Form onValkAdd={valk => onNewValkAdd(valk)} organizations={organizations} />
            {organizations.map(orgs => <Organization key={orgs.name} organization={orgs} valks={valk.filter(valk => valk.org === orgs.name)} />)}
            <Profile />
        </div>
    );
}

export default App;
