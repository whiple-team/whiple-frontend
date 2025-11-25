import {useState} from "react";
import InputInfo from "./ForLoginForm/InputInfo";
import useTabs from "../hooks/useTabs";
import Tab from "./common/Tab";

interface LoginFormProps {
    onLogin : (email:string, password: string) => void;
    onJoin : (email: string, password: string, username: string) => void;
}

export default function LoginForm({onLogin, onJoin}:LoginFormProps){

    const {tab, changeTab} = useTabs("tab1")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    return(
        <div className="gap-3 flex flex-col items-center justify-center">
            
            {/* 탭 */}
            <Tab widthPx={386} state1="로그인" state2="회원가입" selected={tab} onTabChange={changeTab}/>
                        
            {/* 폼 */}
            {tab === 'tab1' ? (
                <form 
                    onSubmit={(e)=>{
                        e.preventDefault();
                        onLogin(email, password);
                    }}>                    
                        <InputInfo onChange={setEmail} value={email} name="Email" type="string" PHvalue="Enter your email" />
                        <InputInfo onChange={setPassword} value={password} name="Password" type="password" PHvalue="Enter your password" />
                        <button type="submit" className="mt-4 w-full bg-black text-white py-2 rounded-[8px]">Login</button>
                </form>    
            ) : (
                <form 
                    onSubmit={(e)=>{
                        e.preventDefault();
                        onJoin(email, password, username);
                    }}>                    

                        <InputInfo onChange={setEmail} value={email} name="Email" type="string" PHvalue="Enter your email" />
                        <InputInfo onChange={setPassword} value={password} name="Password" type="password" PHvalue="Enter your password" />
                        <InputInfo onChange={setUsername} value={username} name="Username" type="string" PHvalue="Enter your username" />
                        
                        <button type="submit" className="mt-4 w-full bg-black text-white py-2 rounded-[8px]">Sign Up</button>
                
                </form>
            )}
        </div>
    );
}