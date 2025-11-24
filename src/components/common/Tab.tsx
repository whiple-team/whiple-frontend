interface TabProps {
    state1:string;
    icon1?:string;
    state2:string;
    icon2?:string;
    selected:string;
    onTabChange: (tab:string) => void;
}

export default function Tab({state1, state2, selected, onTabChange, icon1, icon2}:TabProps){

    return(
        <div className="w-[386px] bg-[#F5F5F5] rounded-[8px] flex flex-row justify-between"> 
            <button
                onClick={() => onTabChange("tab1")}
                 className={`w-1/2 h-[40px] rounded-[8px]
                    ${selected === 'tab1' ? 'bg-black text-white' : 'bg-[#F5F5F5]'    }`}
            >
                {icon1 && <img src={icon1}></img>}
                {state1}
            </button>
            <button
                onClick={() => onTabChange("tab2")}
                className={`w-1/2 h-[40px] rounded-[8px]
                    ${selected === 'tab2' ? 'bg-black text-white' : 'bg-[#F5F5F5]'    }`}
            >
                {icon2 && <img src={icon2}></img>}
                {state2}
            </button>    
        </div>
    );
}