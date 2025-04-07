import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return( <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? classes.isActive : undefined }>SecondPage</NavLink>
                </li>
                <li>
                    <NavLink to="/Characters" className={({isActive}) => isActive ? classes.isActive : undefined } end>CharactersPage</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;