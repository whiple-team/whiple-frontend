import DetailRating from "./common/DetailRating";
import StarRating from "./common/StarRating";
interface ReviewCardProps {
    id: number,
    whiskeyId : number,
    reviewText : string,
    overallRating: number,
    tastingNotes: {
      smoky: number,
      sweetness : number,
      fruity: number,
      spicy: number
    },
    author: string
    createdAt: string
}

export default function ReviewCard(
    {reviewText, tastingNotes, author, createdAt, overallRating}:ReviewCardProps
) {
    
    return(
        <div className="flex-shrink-0 w-[460px] h-[220px] rounded-[8px] p-6 bg-[#F5F5F5] flex flex-col justify-between">
            <div className="justify-between flex">
                <span className="text-gray-900">{reviewText}</span>
                <span><StarRating rating={overallRating} /></span> 
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <DetailRating name={"스모키"} rating={tastingNotes.smoky}/>
                    <DetailRating name={"당도"} rating={tastingNotes.sweetness}/>
                    <DetailRating name={"프루티"} rating={tastingNotes.fruity}/>
                    <DetailRating name={"스파이시"} rating={tastingNotes.spicy}/>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[14px] text-gray-500">{author}</span>
                    <span className="text-[12px] text-gray-400">{createdAt}</span>
                </div>
            </div>
        </div>
    );
}