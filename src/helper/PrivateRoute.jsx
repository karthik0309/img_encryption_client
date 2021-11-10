import React from "react";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children,loggedIn }) => {
    return loggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;