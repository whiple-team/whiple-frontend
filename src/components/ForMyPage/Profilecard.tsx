

export default function Profilecard() {
    return(
        <div className="flex flex-row justify-between items-center w-[478px] h-[92px] m-[67px]">
            {/* 프로필 사진 */}
           <img className="w-[100px] h-[100px]"></img>
            {/* 회원 정보 */}
            <div className="flex flex-col">
                <p>username</p>
                <p>user@gmail.com</p>
            <div className="flex gap-4">
                <span>등급</span><span>일반 회원</span>
            </div>
            </div>
            {/* 수정 버튼 */}
            <button className="w-[106px] h-[39px] rounded-[8px] bg-[#999999] border-[1px] border-[#c2bcbc]">
                <img></img>
                <span>프로필 수정</span>
            </button>
        </div>
    );
}