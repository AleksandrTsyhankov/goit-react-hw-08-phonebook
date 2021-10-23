import React from 'react';
import s from '../views/Views.module.css';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div className={s.homeViewContainer}>
    <h1 style={styles.title}>
            Добро пожаловать в приложение Телефонная книга {' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomeView;