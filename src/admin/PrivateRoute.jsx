// components/PrivateRoute.js
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn"); // Or use context/global state

    return isLoggedIn === "true" ? children : <Navigate to="/" />;
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
