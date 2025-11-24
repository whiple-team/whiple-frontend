import LoginForm from "../components/LoginForm";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useAuthStore} from "../store/authStore"

export default function LoginPage(){

  const navigate = useNavigate();
  const setAuth = useAuthStore((state)=> state.setAuth)

  const handleLogin = async(email: string, password: string, username?:string) => {
    try{
      const res = await axios.post("/api/login", {
        email,
        password,
        username
      });

      // 백엔드 응답 예시
      // {
      // "token": "abcdefg12345",
      // "user": {
      //   "id": 1,
      //   "username": "RJ",
      //   "email": "test@naver.com"
      //   }
      // }

      const {token, user} = res.data;
      localStorage.setItem("token",token) 
      //토큰 저장 일단 로컬에 => 이거 나중에 백엔드 코드 올라오면 HttpOnly Cookie로 바꿉시당
      setAuth(user, token);

      navigate("/whiskey-detail");


    }catch (err) {
        console.error(err);
        alert("이메일 또는 비밀번호가 잘못되었습니다.");
        }
      };

    return (
      <div className="bg-[linear-gradient(80deg,#FFFFFF,#9DA8BE)] w-full min-h-full flex flex-col gap-6 justify-center items-center">
        <p className="text-2xl font-bold">WHIPLE</p>
        <LoginForm onSubmit={handleLogin}/>
      </div>
    );
  }

