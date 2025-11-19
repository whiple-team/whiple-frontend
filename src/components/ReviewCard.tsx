import DetailRating from "./common/DetailRating";
import StarRating from "./common/StarRating";

export default function ReviewCard() {
    
    return(
        <div className="flex-shrink-0 w-[460px] h-[220px] rounded-[8px] p-6 bg-[#F5F5F5] flex flex-col justify-between">
            <div className="justify-between flex">
                <span className="text-gray-900">리뷰 내용</span>
                <span><StarRating rating={4.5} /></span> 
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <DetailRating name={"스모키"} rating={38}/>
                    <DetailRating name={"당도"} rating={50}/>
                    <DetailRating name={"프루티"} rating={30}/>
                    <DetailRating name={"스파이시"} rating={80}/>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[14px] text-gray-500">작성자</span>
                    <span className="text-[12px] text-gray-400">작성일</span>
                </div>
            </div>
        </div>
    );
}