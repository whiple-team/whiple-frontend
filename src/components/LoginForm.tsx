import {useState} from "react";
import InputInfo from "./ForLoginForm/InputInfo";

interface LoginFormProps {
    onSubmit : (email:string, password: string, username?: string) => void;
}

export default function LoginForm({onSubmit}:LoginFormProps){

    const [tab, setTab] = useState<'login' | 'signup'>('login');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

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
            <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    onSubmit(email, password, username);
                }}
                className="p-8 gap-4 w-[386px] bg-[#F5F5F595] flex flex-col rounded-[8px] items-center justify-center">
                {tab === 'login' ? (
                    <>
                        <InputInfo onChange={setEmail} value={email} name="Email" type="string" PHvalue="Enter your email" />
                        <InputInfo onChange={setPassword} value={password} name="Password" type="password" PHvalue="Enter your password" />
                        <button type="submit" className="mt-4 w-full bg-black text-white py-2 rounded-[8px]">Login</button>
                    </>  
                    ) : (
                    <>
                        <InputInfo onChange={setEmail} value={email} name="Email" type="string" PHvalue="Enter your email" />
                        <InputInfo onChange={setPassword} value={password} name="Password" type="password" PHvalue="Enter your password" />
                        <InputInfo onChange={setUsername} value={username} name="Username" type="string" PHvalue="Enter your username" />
                        
                        <button type="submit" className="mt-4 w-full bg-black text-white py-2 rounded-[8px]">Sign Up</button>
                    </>  
                    )}
            </form>
        </div>
    );
}