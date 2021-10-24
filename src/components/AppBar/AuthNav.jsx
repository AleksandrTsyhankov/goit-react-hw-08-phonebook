import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import s from './AppBar.module.css';


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