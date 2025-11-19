//import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
//  const navigate = useNavigate();
  return (
    <div className="bg-[linear-gradient(80deg,#FFFFFF,#9DA8BE)] w-full h-screen flex flex-col gap-6 justify-center items-center">
      <p className="text-2xl font-bold">WHIPLE</p>
      <LoginForm />
    </div>
  );
};

export default Login;
