import HomeIcon from '../assets/HomeIcon.svg';
import { Link } from "react-router-dom"; 
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    isLoggedIn : boolean;
}

export default function Header({isLoggedIn}: HeaderProps) {
    const navigate = useNavigate();
    
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
            {/*여기는 페이지 빌드하고 싹 다 링크로 바꿔주세용*/}
            <div className="flex items-center gap-8">
                {/* 메뉴 */}
                <nav className="flex items-center gap-6 text-gray-800 font-medium">
                    <button onClick={() => navigate("/whiskey-detail")}>위스키</button>
                    <button>커뮤니티</button>
                </nav>

                {/* 로그인 or 마이페이지 버튼 */}
                {isLoggedIn ? (
                    <button 
                        onClick={() => navigate("/mypage")}
                        className="px-4 py-2 bg-black text-white text-[16px] rounded-md hover:bg-gray-800">
                        마이페이지
                    </button>
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
