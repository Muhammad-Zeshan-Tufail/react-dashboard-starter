import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Login from "./pages/Login";

function App() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, [user, navigate]);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/*" element={<PrivateRoutes />} />
          <Route index element={<Navigate to="/home" />} />
        </>
      ) : (
        <>
          <Route path="/auth/*" element={<PublicRoutes />}>
            <Route index element={<Navigate to="login" />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;
