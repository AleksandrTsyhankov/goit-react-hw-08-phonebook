import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
import Typography from '@mui/material/Typography';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        <Typography variant="h6" color="inherit" component="div">
          Регистрация
        </Typography>
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeClassName={s.activeLink}
      >
        <Typography variant="h6" color="inherit" component="div">
          Логин
        </Typography>
      </NavLink>
    </div>
  );
};