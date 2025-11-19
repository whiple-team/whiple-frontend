import Tag from "../common/Tag";
import StarRating from "../common/StarRating";
import Share from "../../assets/Share.svg";
import Save from "../../assets/Save.svg";


export default function DetailCard() {
    return(
        <div className="w-[548px] h-[260px] flex flex-row gap-4">
            {/* 이미지 */}
            <img src="https://d1e2y5wc27crnp.cloudfront.net/media/core/product/thumbnail/02f1efc3-9592-4243-b888-14562da0ad8f.webp" alt="Detail Image" className="w-[213px] h-[259px] bg-gray-300 rounded-md"/>
            
            {/* 글자정보 + 버튼 */}
            <div className="flex flex-col justify-between">
                {/* 태그 + 타이틀 */}
                <div className="flex flex-col gap-1">
                    <div className="w-[271px] h-[28px]">
                        <Tag/>
                    </div>
                    <h2 className="text-xl font-bold">다이앤 블랜디드 프리미엄</h2>
                </div>
                {/* 설명글 */}
                <p className="text-gray-600">다이앤 위스키는 정통성을 중시하는 대만, 일본과 달리 저도주를 선호하며 새로운 주류 문화를 이끌어가는 한국 특성에 맞추어 개발된 프리미엄 위스키입니다.</p>
                {/*별 레이팅*/}
                <div className="flex flex-row items-center gap-4">
                    <StarRating rating={3.5}/> <span className="font-bold">3.5</span>
                </div>
                {/* 버튼 */}
                <div className="flex flex-row justify-between gap-2">
                    <button className="w-full h-[40px] bg-black text-white rounded-[8px] flex items-center justify-center gap-2"><img src={Save} alt="save" />저장하기</button>
                    <button className="w-[44px] h-[40px] bg-gray-200 border-[1px] flex items-center justify-center border-gray-300 rounded-[8px]">
                        <img src={Share} alt="share" />
                    </button>
                </div>
            </div>

            
        </div>
    );
}