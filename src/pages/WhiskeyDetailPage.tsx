import {Pagenation, WhiskeyCard, BestWhiskeyArr} from "../components";
import {useState, useEffect} from "react";
import SearchImg from "../assets/Search.svg";


interface Whiskey {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
}

interface WhiskeyItem {
  id: number;
  image: string;
}

const WhiskeyDetail = () => {
  const [whiskies, setWhiskies] = useState<Whiskey[]>([]);
  const [items, setItems] = useState<WhiskeyItem[]>([]);

  useEffect(() => {
    fetch("/data/whiskey.json")
      .then((res) => res.json())
      .then((data) => setWhiskies(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
  fetch("/data/BestWhiskey.json")
    .then((res) => res.json())
    .then((data) => setItems(data))
    .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/*상단 배너*/}
      <div className="bg-[linear-gradient(80deg,#FFFFFF,#9DA8BE)] w-full h-[160px] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">위스키 둘러보기</h1>
        <p className="text-gray-600 mt-2">
          어쭈구 subtitle
        </p>
      </div>
      
      {/*인기위스키*/}
      <div className="px-4 py-10 w-[900px] flex flex-row justify-center items-center">
        <BestWhiskeyArr items={items}/>
      </div>

      {/* 상품 레이아웃 */}
      <div className="flex flex-col items-center gap-8 my-8">
        <div className="w-[776px] flex flex-col items-center justify-between">
        
          {/* 검색창 + 카테고리 */}
          <div className="w-[776px] py-2 flex flex-row items-center justify-between">
            
            {/* 검색창 */}
            <div className="w-[300px] border border-gray-400 bg-white flex flex-row items-center justify-between py-1 px-3 rounded-full">
              <input placeholder="검색어를 입력하세요" className="w-60" ></input>
              <button>
                <img src={SearchImg} alt="검색" /></button>
            </div> 
            
            <div className="w-[200px] border border-black">
              카테고리
              {/* 나중에 드롭다운으로 바꿔야할듯 */}
            </div>  
          </div>

          {/* 위스키 카드 4*4 */}       
          <div className="grid grid-cols-4 gap-4 mt-5">
            {whiskies.map((item) => (
              <WhiskeyCard key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/*페이지네이션*/}
        <div>
          <Pagenation data={whiskies} />
        </div>
      </div>
    </div>
  );
};

export default WhiskeyDetail;
