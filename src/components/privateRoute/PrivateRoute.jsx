import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

// const getAuth = () => {
//   const token = localStorage.getItem("x-token");
//   return !!token;
// };

export function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
}
// usage
// <Route path='/...' element={<PrivateRoute> <... /> </PrivateRoute>} />

// FOR NESTED ROUTES:
export function PrivateWrapper() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
// usage
// <Route element={<PrivateWrapper />}> <Route path='/...' element={<... />} /> </Route>
