import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SecondPage from './sidor/sida1';

import CharacterPage from './sidor/sida2';
import RootLayout from './Root';
import ErrorPage from './sidor/Error';
import CharacterDetailPage from './sidor/CharacterDetail';




const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <SecondPage/>},
            {path: 'Characters', element: <CharacterPage/> },
            {path: 'Characters/:characterId', element: <CharacterDetailPage />}
        ],
    }
    
    ]);
    
    
    function Home(){
        return <RouterProvider router={router} />
    }

    export default Home;