import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SecondPage from './sidor/sida1';
import App from './App';



const router = createBrowserRouter([
    {path: '/', element: <SecondPage/>},
    
    ]);
    
    
    function Home(){
        return <RouterProvider router={router} />
    }

    export default Home;