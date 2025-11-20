import Tag from "./common/Tag";
import {useNavigate} from "react-router-dom";

interface WhiskeyCardProps {
    id: number;
    name: string;
    rating: number;
    reviewCount : number;
    image : string;
    tags : string[];
}

export default function WhiskeyCard({
    id,
    name,
    rating,
    reviewCount,
    image,
    tags,
}: WhiskeyCardProps) {

    const navigate =useNavigate();

    return(
        <button 
        className="flex-shrink-0 w-[182px] h-[351px] bg-[#F5F5F5] rounded-[8px] flex flex-col p-4 gap-4 hover:shadow-lg transition"
        onClick={()=>navigate(`/whiskey/${id}`)}>
            <img className="w-[153px] h-[200px] mx-auto" src={image} alt="Whiskey Image"></img>
            <div className="flex flex-col gap-2 items-start">
                <p>{name}</p>
                <div className="flex flex-row items-center gap-3">   
                    <span>
                        <span className="text-sm">★</span>
                        <span className="font-medium text-sm">{rating}</span>
                    </span>
                    <span className="text-gray-500 text-sm">({reviewCount})</span>
                </div>
                <div className="flex gap-1 flex-wrap">
                    {tags.map((t, i) => (
                        <Tag key={i} label={t} />
                    ))}
                </div>

            </div>
        </button>
    );
}