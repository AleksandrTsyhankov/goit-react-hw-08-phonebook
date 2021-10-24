import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Navigation from './Navigation';
import UserMenu from './UserMenu.jsx';
import AuthNav from './AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';


export default function PhonebookAppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppBar position="static">
        <header className={s.header}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    </AppBar>
  );
};