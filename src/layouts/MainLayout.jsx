import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = () => {
  const { isSidebarOpen, user } = useSelector((store) => store.user);
  return user ? (
    <div>
      <aside
        className={`fixed top-0 left-0 z-40 max-w-[280px] w-full h-screen transition-transform  ${
          !isSidebarOpen ? "-translate-x-full" : "-translate-x-0"
        } lg:translate-x-0`}
      >
        <div className="h-[inherit] overflow-y-auto bg-gray-400 shadow-md">
          <Sidebar />
        </div>
      </aside>
      <div className="lg:ml-[280px] h-screen flex flex-col px-4">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default MainLayout;
