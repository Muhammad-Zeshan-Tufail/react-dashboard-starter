import { useDispatch } from "react-redux";
import { login } from "../../store/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="h-screen overflow-auto w-full flex justify-center items-center">
      <h2 className="font-bold text-4xl">Login page</h2>
      <button onClick={() => dispatch(login({ name: "zeshan", id: 1 }))}>login</button>
    </div>
  );
};

export default Login;
