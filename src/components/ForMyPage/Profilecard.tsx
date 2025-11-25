import { useAuthStore } from "../../store/authStore";

export default function Profilecard() {

    const user = useAuthStore(state => state.user);

    if (!user) return null;

    return(
        <div className="flex flex-row justify-between items-center w-[550px] p-4 rounded-[8px] bg-[#F5F5F5] ">
            {/* 프로필 사진 */}
           <img className="w-[100px] h-[100px]"></img>
            {/* 회원 정보 */}
            <div className="flex flex-col w-[200px]">
                <p>{user.username}</p>
                <p>{user.email}</p>
            <div className="flex gap-4">
                <span>등급</span><span>백엔드에 정보 넣어줘요</span>
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