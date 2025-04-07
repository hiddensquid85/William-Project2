import { Link, useNavigate } from 'react-router-dom';

function SecondPage() {
    const navigate = useNavigate();

function navigateHandler(){
    navigate('/Characters')
}


    return (
        <>
            <h1>Second Star Wars Page</h1>
            <p>
                Go to <Link to="Characters">The list of Characters</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    );
}

export default SecondPage;
