import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-[linear-gradient(80deg,#FFFFFF,#9DA8BE)] w-full min-h-full flex flex-col gap-3 justify-center items-center">
      <div className="flex flex-col items-center gap-2">  
        <h1 className="text-4xl font-bold block">WHIPLE</h1>
        <p className="block">당신의 잔에 담긴 이야기를 기록하고 공유하세요</p>
      </div> 
      <button  
        onClick={() => navigate("/whiskey-detail")} 
        className="px-4 py-2 bg-white/50 hover:bg-white/70 transition-colors text-black border border-gray-400 text-[12px] rounded-[20px]">
          시작하기
        </button>
    </div>
  );
};

export default Home;
