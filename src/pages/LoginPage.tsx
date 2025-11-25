//회원가입 로직 추가해주세요

import LoginForm from "../components/LoginForm";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../store/authStore"
import { join, login } from "../api/auth";

export default function LoginPage(){

  const navigate = useNavigate();
  const setAuth = useAuthStore((state)=> state.setAuth)

  const handleLogin = async(email: string, password: string) => {
    try{
      const data = await login(email, password);

      // 백엔드 응답 구조에 맞게 파싱
      const { token, user } = data.data;

      localStorage.setItem("token", token);
      setAuth(user, token);

      navigate("/whiskey-detail");
    } catch (err) {
      console.error(err);
      alert("이메일 또는 비밀번호가 잘못되었습니다.");
    }
};


  const handleJoin = async (email: string, password: string, username: string) => {
    try {
      await join(email, password, username);

      alert("회원가입 완료 ! 로그인 후 이용해주세요.")
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("이메일 또는 비밀번호가 잘못되었습니다.");
    }
  };


    return (
      <div className="bg-[linear-gradient(80deg,#FFFFFF,#9DA8BE)] w-full min-h-full flex flex-col gap-6 justify-center items-center">
        <p className="text-2xl font-bold">WHIPLE</p>
        <LoginForm onLogin={handleLogin} onJoin={handleJoin}/>
      </div>
    );
  }

