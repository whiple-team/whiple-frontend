import Tag from "./common/Tag";

interface WhiskeyCardProps {
    name: string;
    rating: number;
    reviewCount : number;
    image : string;
    tag : string[];
}

{/* 나중에 링크로 바꿔주셈 + 프롭스도 수정해주셈 */}
export default function WhiskeyCard() {
    return(
        <button className="flex-shrink-0 w-[182px] h-[351px] bg-[#F5F5F5] rounded-[8px] flex flex-col p-4 gap-4 hover:shadow-lg transition">
            <img className="w-[153px] h-[200px] mx-auto" src="https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product_detail/d8f6ba96-eecf-4198-b19b-904be40968c5.webp" alt="Whiskey Image"></img>
            <div className="flex flex-col gap-2 items-start">
                <p>위스키 이름</p>
                <div className="flex flex-row items-center gap-3">   
                    <span>
                        <span className="text-sm">★</span>
                        <span className="font-medium text-sm">4.8</span>
                    </span>
                    <span className="text-gray-500 text-sm">(123)</span>
                </div>
                <div><Tag/></div>
            </div>
        </button>
    );
}