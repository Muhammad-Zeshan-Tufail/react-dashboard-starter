import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="font-bold text-4xl">Home</h2>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </div>
  );
};

export default Home;
