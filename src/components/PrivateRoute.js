import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import authSelecttors from '../redux/auth/auth-selectors';



export default function PrivateRoute({ children, ...routeProps }) {
    const isLoggedIn = useSelector(authSelecttors.getIsLoggedIn);
    return <Route {...routeProps}>{
       isLoggedIn ? children : <Redirect to="/login" />
    }</Route>
};