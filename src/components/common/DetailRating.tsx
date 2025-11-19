{/* 리뷰카드 안에 노출되는 상세 레이팅 */}

interface DetailRatingProps {
    name : string;
    rating : number;
}

export default function DetailRating(props:DetailRatingProps){
    return(
        <div className="w-[88px] h-[40px] flex flex-col gap-2">
            <span className="text-[11px] text-gray-900">{props.name}</span>
            <div className="w-full h-2 bg-[#E6E6E6] rounded-full overflow-hidden">
                <div
                    className="h-full bg-[#999999] rounded full"
                    style={{ width: `${props.rating}%` }}
                ></div>
            </div>
        </div>
    );
}