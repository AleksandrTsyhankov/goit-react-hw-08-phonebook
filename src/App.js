import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
// import { PublicRoute, PrivateRoute } from "react-private-public-route";
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import { fetchContacts } from './redux/phonebook/phonebook-operations';
import authSelectors from './redux/auth/auth-selectors';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Spinner from './components/Spinner';

const PhonebookAppBar = lazy(() => import('./components/AppBar/AppBar'));
const PhonebookView = lazy(() => import('./views/PhonebookView'));
const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) { dispatch(fetchContacts()) }
  }, [dispatch, isLoggedIn]);

  
  return (
    <Suspense fallback={<Spinner />}>
      <PhonebookAppBar />

      <Switch>
        <PublicRoute exact path="/">
          <HomeView/>
        </PublicRoute>

        <PrivateRoute path="/phonebook">
          <PhonebookView />
        </PrivateRoute>



        <PublicRoute path="/register" restricted>
          <RegisterView/>
        </PublicRoute>

        <PublicRoute path="/login" restricted>
          <LoginView/>
        </PublicRoute>
      </Switch>
    </Suspense>
  );
};

export default App;
