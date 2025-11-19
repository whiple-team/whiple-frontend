interface InputInfoProps {
    name : string;
    PHvalue : string;
}

export default function InputInfo({ name, PHvalue }: InputInfoProps) {
    return(
        <div className="w-full flex flex-col gap-1">
            <p className="">{name}</p>
            <input type="text" placeholder={PHvalue} className="px-2 w-full h-[40px] border border-gray-300 rounded-[8px]"/>
        </div>
    );
}