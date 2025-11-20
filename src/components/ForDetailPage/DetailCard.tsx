import Tag from "../common/Tag";
import StarRating from "../common/StarRating";
import Share from "../../assets/Share.svg";
import Save from "../../assets/Save.svg";


interface WhiskeyCardProps {
    id: number;
    name: string;
    rating: number;
    reviewCount : number;
    image : string; 
    tags : string[];
}
export default function DetailCard(
    {
    name,
    rating,
    image,
    tags,
}: WhiskeyCardProps) {
    return(
        <div className="w-[548px] h-[260px] flex flex-row gap-4">
            {/* 이미지 */}
            <img src={image}/>
            {/* 글자정보 + 버튼 */}
            <div className="flex flex-col justify-between">
                {/* 태그 + 타이틀 */}
                <div className="flex flex-col gap-1">
                    <div className="w-[271px] h-[28px] flex flex-row">
                        {tags.map((t, i) => (
                        <div className="flex px-1">
                        <Tag key={i} label={t} />
                        </div>))}
                    </div>
                    <h2 className="text-xl font-bold">{name}</h2>
                </div>
                {/* 설명글 */}
                <p className="text-gray-600">다이앤 위스키는 정통성을 중시하는 대만, 일본과 달리 저도주를 선호하며 새로운 주류 문화를 이끌어가는 한국 특성에 맞추어 개발된 프리미엄 위스키입니다.</p>
                {/*별 레이팅*/}
                <div className="flex flex-row items-center gap-4">
                    <StarRating rating={rating}/> <span className="font-bold">{rating}</span>
                </div>
                {/* 버튼 */}
                <div className="flex flex-row justify-between gap-2">
                    <button className="w-full h-[40px] bg-black text-white rounded-[8px] flex items-center justify-center gap-2"><img src={Save} alt="save" />저장하기</button>
                    
                    {/* 공유하기 버튼 -> 모달처리 ㄱㄱ */}
                    <button className="w-[44px] h-[40px] bg-gray-200 border-[1px] flex items-center justify-center border-gray-300 rounded-[8px]">
                        <img src={Share} alt="share" />
                    </button>
                </div>
            </div>

            
        </div>
    );
}