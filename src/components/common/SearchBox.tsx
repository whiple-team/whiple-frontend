import { useState } from "react";
import SearchImg from "../../assets/Search.svg";
import { useNavigate} from "react-router-dom";

export default function SearchBox(){
    
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const handleSearch = () => {
        if(!keyword.trim()) return;
        navigate(`/search?keyword=${keyword}`)
    };

    return(
            <div className="w-[300px] border border-gray-400 bg-white flex flex-row items-center justify-between py-1 px-3 rounded-full">
                <input 
                    placeholder="검색어를 입력하세요" 
                    className="w-60"
                    onChange={(e)=>setKeyword(e.target.value)}
                />
                <button onClick={handleSearch}>
                    <img src={SearchImg} alt="검색" />
                </button>
            </div> 

    );
}