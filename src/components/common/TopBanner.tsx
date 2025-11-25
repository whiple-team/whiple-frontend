interface TopBannerProps{
    title: string;
    subtitle: string;
}

export default function TopBanner({title, subtitle}:TopBannerProps){
    return(
        <div className="bg-[linear-gradient(80deg,#FFFFFF,#9DA8BE)] w-full h-[160px] flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <p className="text-gray-600 mt-2">
             {subtitle}
            </p>
        </div>
    );
}