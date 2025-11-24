import {useState} from "react";

export default function useTabs(defaultTabs: string){
    
    //tab 상태관리용 훅 (초기값은 받아와야함)
    const [tab, setTab] = useState(defaultTabs)
    //함수 선언 => setTab()을 부모 컴포넌트로 보내서 사용하려고
    const changeTab = (selected:string) => setTab(selected);

    //상태, 함수 반환
    return { tab, changeTab };
}