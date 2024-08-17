import { NavLink } from 'react-router-dom';
import { FaFlagUsa } from 'react-icons/fa';
import css from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.wrapper}>
          <FaFlagUsa size="40px" color="#0c7bc1" />

          <nav className={css.nav} >
            <ul >
              <li> 
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive ? css.active : css.link
                  }
                >
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;