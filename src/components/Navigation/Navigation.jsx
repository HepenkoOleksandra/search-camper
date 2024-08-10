import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const navLinkClassActive = ({ isActive }) =>
  // clsx(css.navLink, { [css.active]: isActive });
clsx(css.navLink, isActive && css.active);

const Navigation = () => {
  return (
    <>
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink className={navLinkClassActive} to='/'>Home</NavLink>
                <NavLink className={navLinkClassActive} to='/campers'>Catalog</NavLink>
                <NavLink className={navLinkClassActive} to='/favorite'>Favorite</NavLink>
            </nav>   
        </header>   
    </>
  )
}

export default Navigation



