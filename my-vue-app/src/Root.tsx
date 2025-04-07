import {Outlet} from 'react-router-dom';
import MainNavigation from './Componets/MainNavigation';
import classes from '../src/sidor/Root.module.css'


function RootLayout() {
  return (
  <>
  <MainNavigation />
  <main className={classes.content}>
    <Outlet />
    </main>
  </>
  );  
}

export default RootLayout;