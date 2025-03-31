import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SecondPage from './sidor/sida1';
import App from './App';
import CharacterPage from './sidor/sida2';



const router = createBrowserRouter([
    {path: '/', element: <SecondPage/>},
    {path: '/Characters', element: <CharacterPage/>},
    
    ]);
    
    
    function Home(){
        return <RouterProvider router={router} />
    }

    export default Home;