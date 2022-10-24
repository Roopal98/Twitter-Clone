import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

// const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
//   const isAuthenticated = localStorage.getItem("isAuthenticated");
//   console.log("this", isAuthenticated);

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" replace />
//       }
//     />
//   );
// }

const ProtectedRoute = ({ redirectPath = '/signin', children,}) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated")?true:false;
  console.log('protected')
  if (!isAuthenticated) {
    console.log('moving to signin')
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute;