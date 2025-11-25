import HomeIcon from '../assets/HomeIcon.svg';
import { Link } from "react-router-dom"; 
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';



export default function Header() {
    const navigate = useNavigate();
    const {token} = useAuthStore();
    const isLoggedIn = !!token;  //토큰 여부로 로그인 상태 판단
    const clearAuth = useAuthStore((state)=>state.clearAuth);

    return(
        <header className="w-full h-14 bg-[#F5F5F5] px-4 py-9 flex items-center justify-between text-[#1E1E1E]" >
            
            {/*홈 아이콘 */}
            <Link to="/" className="flex items-center hover:opacity-80 transition">
                <img 
                    src={HomeIcon} 
                    alt="Home"
                />
                <span className='font-bold p-4'>WHIPLE</span>
            </Link>

            {/* 오른쪽: 메뉴 + 로그인 묶음 */}
            <div className="flex items-center gap-8">
                {/* 메뉴 */}
                <nav className="flex items-center gap-6 text-gray-800 font-medium">
                    <button onClick={() =>{navigate("/whiskey-detail")}}>위스키</button>
                    <button>커뮤니티</button>
                </nav>

                {/* 로그인 or 마이페이지 버튼 */}
                {isLoggedIn ? (
                    <div className='flex flex-row gap-3'>
                        <button 
                            onClick={() => {
                                clearAuth();
                                navigate("/")}}
                            className="px-4 py-2 bg-black text-white text-[16px] rounded-[8px] hover:bg-gray-800">
                            로그아웃
                        </button>
                        
                        <button 
                            onClick={() => navigate("/mypage")}
                            className="px-4 py-2 bg-black text-white text-[16px] rounded-[8px] hover:bg-gray-800">
                            마이페이지
                        </button>
                    </div>
                ):(
                    <button 
                        onClick={() => navigate("/login")}
                        className="px-4 py-2 bg-black text-white text-[16px] rounded-md hover:bg-gray-800">
                        로그인
                    </button>
                )}
                
            </div>
        </header>
    );
}
