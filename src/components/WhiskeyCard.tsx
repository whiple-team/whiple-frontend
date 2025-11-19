import Tag from "./common/Tag";

interface WhiskeyCardProps {
    id: number;
    name: string;
    rating: number;
    reviewCount : number;
    image : string;
    tags : string[];
}

{/* 나중에 링크로 바꿔주셈 */}
export default function WhiskeyCard({
    name,
    rating,
    reviewCount,
    image,
    tags,
}: WhiskeyCardProps) {
    return(
        <button className="flex-shrink-0 w-[182px] h-[351px] bg-[#F5F5F5] rounded-[8px] flex flex-col p-4 gap-4 hover:shadow-lg transition">
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