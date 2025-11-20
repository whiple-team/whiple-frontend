{/* 인기 위스키 컴포넌트 */}
import { useNavigate } from "react-router-dom"

interface BestWhiskeyProps {
    id: number;
    image: string;
}

export default function BestWhiskey ({id, image} : BestWhiskeyProps){
    const navigate = useNavigate();
    
    return(
        <div>
            <button
                onClick={()=>navigate(`/whiskey/${id}`)}
                className="w-[200px] h-[300px] border border-black overflow-hidden hover:opacity-90 transition"
                >
                    <img
                        src={image}
                        alt="best whiskey"
                        className="w-full h-full object-cover"
                    />
            </button>
        </div>
    );
}