import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import s from './AppBar.module.css';

function Navigation() {

  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        <Typography variant="h6" color="inherit" component="div">
          Главная
        </Typography>
      </NavLink>

        <NavLink
          to="/phonebook"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          <Typography variant="h6" color="inherit" component="div">
            Телефонная книга
          </Typography>
        </NavLink>
    </nav>
  );
};

export default Navigation;