import NoneProfile from "../../assets/noneprofile.png";

export default function Profilecard() {
    return(
        <div className="w-[642px] h-[180px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col justify-between">
            {/* 프로필 섹션 */}
            <div className="flex items-center gap-4">
                <img className="w-[64px] h-[64px] rounded-full" src={NoneProfile} alt="프로필사진"></img>
                <div className="flex flex-col">
                    <span className="font-bold text-lg">회원 이름</span>
                    <span className="text-sm text-gray-600">회원등급 or 프로필 메세지</span>
                </div>
                <button className="ml-auto bg-gray-300 rounded-[8px] px-2 py-1 text-[13px]">프로필 수정</button>
            </div>

            {/* 통계 버튼들 -> 나중에 연결 ㄱㄱ 프로필 카드 하단에 노출되게*/}
            <div className="flex gap-8 justify-center">
                <button className="flex flex-col items-center">
                    <span className="font-bold text-lg">25</span>
                    <span className="text-sm text-gray-600">리뷰 수</span>
                </button>
                <button className="flex flex-col items-center">
                    <span className="font-bold text-lg">10</span>
                    <span className="text-sm text-gray-600">저장한 위스키</span>
                </button>
                <button className="flex flex-col items-center">
                    <span className="font-bold text-lg">5</span>
                    <span className="text-sm text-gray-600">팔로워</span>
                </button>
            </div>
        </div>
    );
}