interface InputInfoProps {
    name : string;
    PHvalue : string;
    type: string;

    value: string;                     // 입력값
    onChange: (value: string) => void; // 부모에게 전달
}

export default function InputInfo({ name, PHvalue, type, onChange }: InputInfoProps) {
    return(
        <div className="w-full flex flex-col gap-1">
            <p className="">{name}</p>
            <input type={type} placeholder={PHvalue}
                onChange={(e) => onChange(e.target.value)}   // 입력값을 부모로 전달
                className="px-2 w-full h-[40px] border border-gray-300 rounded-[8px]"
            />
        </div>
    );
}