import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route exact path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
