import { Profilecard, Tab } from "../components";
import useTabs from "../hooks/useTabs"

export default function MyPage(){
    //커스텀 훅 setTab(a)=changeTab(a)
    const {tab, changeTab} = useTabs("tab1");

    return(
        <div className="flex flex-col justify-center items-center">
            <Profilecard></Profilecard>
            
            {/* UI 컴포넌트 - 버튼이름 / 눌린 버튼 / setTab(a)=changeTab(a)=onTabChange(a)  */}
            
            <div className="flex flex-col items-center w-[489px] gap-10">
                <Tab widthPx={489} state1="내 테이스팅 노트" state2="저장한 위스키" selected={tab} onTabChange={changeTab}/>
                {tab === "tab1" && 
                    <div>
                        탭1 내용
                    </div>}

                {tab === "tab2" && 
                    <div>
                        탭2 내용
                    </div>}
            </div>                    
        </div>
    );
}