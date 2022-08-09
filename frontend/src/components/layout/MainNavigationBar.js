import { Link } from 'react-router-dom';

import classes from './MainNavigationBar.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BigOtterCodes</div>
      <ul>
        <li>
          <Link to='/'>Socials</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
