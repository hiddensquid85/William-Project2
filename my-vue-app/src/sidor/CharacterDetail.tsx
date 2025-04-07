import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function CharacterDetailPage(){
    const params = useParams();

    

    return( 
    <>
    <h1>Product Details!</h1>
    <p>{params.characterId}</p>
    <p><Link to=".." relative="path"></Link></p>
    </>
     );
}

export default CharacterDetailPage;