import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import authOperations from '../redux/auth/auth-operations';
import s from './Views.module.css';



export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.loginContainer}>

        <h1 className={s.loginTitle}>Страница логина</h1>

        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          
            Почта
            <TextField
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

        <label className={s.label}>
          
            Пароль
            <TextField
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <Button type="submit" variant="contained" className={s.loginBtn}>Войти</Button>
        </form>

    </div>
  );
}