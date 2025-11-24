// 이거 나중에 토글로 바꿉시다 ..

import StarInput from "./StarInput";
import DetailSlider from "./DetailSlider";

export default function WriteReview() {
    return(
        <div className="w-[548px] h-[562px] bg-[#F5F5F5] rounded-md p-6 flex flex-col justify-between gap-4">
            <h3>테이스팅 노트 작성하기</h3>
            <div><StarInput/></div>
            <div className="flex flex-col gap-4">
                <DetailSlider label="스모키" />
                <DetailSlider label="당도" />
                <DetailSlider label="프루티" />
                <DetailSlider label="스파이시" />
            </div>
            <div>
                테이스팅 노트
                <textarea className="w-full h-[120px] mt-2 p-2 rounded-md resize-none" placeholder="테이스팅 노트를 작성해주세요."></textarea>
            </div>
            <div>
                <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-[8px]">등록하기</button>
            </div>
        </div>
    );
}