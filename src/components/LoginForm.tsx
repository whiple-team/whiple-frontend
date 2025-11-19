import {useState} from "react";
import InputInfo from "./ForLoginForm/InputInfo";
export default function LoginForm(){

    const [tab, setTab] = useState<'login' | 'signup'>('login');

    return(
        <div className="gap-3 flex flex-col items-center justify-center">
            
            {/* 탭 */}
            <div className="w-[386px] bg-[#F5F5F5] rounded-[8px] flex flex-row justify-between"> 
                <button
                    onClick={() => setTab("login")}
                    className={`w-1/2 h-[40px] rounded-[8px]
                        ${tab === 'login' ? 'bg-black text-white' : 'bg-[#F5F5F5]'    }`}
                    >로그인</button>
                <button
                    onClick={() => setTab("signup")}
                    className={`w-1/2 h-[40px] rounded-[8px]
                        ${tab === 'signup' ? 'bg-black text-white' : 'bg-[#F5F5F5]'    }`}
                    >회원가입</button>    
            </div>
            
            {/* 폼 */}
            <div className="p-8 gap-4 w-[386px] bg-[#F5F5F595] flex flex-col rounded-[8px] items-center justify-center">
                {tab === 'login' ? (
                    <>
                        <InputInfo name="Email" PHvalue="Enter your email" />
                        <InputInfo name="Password" PHvalue="Enter your password" />
                        <button className="mt-4 w-full bg-black text-white py-2 rounded-[8px]">Login</button>
                    </>  
                    ) : (
                    <>
                        <InputInfo name="Username" PHvalue="Enter your username" />
                        <InputInfo name="Email" PHvalue="Enter your email" />
                        <InputInfo name="Password" PHvalue="Enter your password" />
                        <button className="mt-4 w-full bg-black text-white py-2 rounded-[8px]">Sign Up</button>
                    </>  
                    )}
            </div>
        </div>
    );
}