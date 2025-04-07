import { Link } from "react-router-dom"

const CHARACTERS = [
    {id: 'c1', title: 'Character 1'},
    {id: 'c2', title: 'Character 2'},
    {id: 'c3', title: 'Character 3'},
];


function CharacterPage() {
    return ( 
    <>
        <h1>Character Page</h1>
    <ul>
        {CHARACTERS.map(char => ( <li key={char.id}>
            <Link to={char.id} >{char.title}</Link>
            </li>
        ))}

    </ul>
    
    </>
    )
}

export default CharacterPage