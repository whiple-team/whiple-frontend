import {Pagenation, WhiskeyCard, BestWhiskeyArr, TopBanner, Modal} from "../components";
import {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchBox from "../components/common/SearchBox";


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
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  // 전체 위스키 목록 가져오기
  useEffect(() => {
    async function loadWhiskies() {
      try {
        const res = await axios.get("/data/whiskey.json");
        setWhiskies(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    loadWhiskies();
  }, []);


  // 인기 위스키 가져오기
  useEffect(() => {
    async function loadBestWhiskey() {
      try {
        const res = await axios.get("/data/BestWhiskey.json");
        setItems(res.data);
      } catch (err) {
        console.error(err);
      }
    }

    loadBestWhiskey();
  }, []);

  //페이지네이션을 위한 슬라이싱 
  const currentPage = Number(searchParams.get("page") || 1);

  const itemsPerPage = 12;

  const startIdx = (currentPage-1)*itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const currentItems = whiskies.slice(startIdx, endIdx);


  return (
    <div className="flex flex-col items-center">
      {/*상단 배너*/}
      <TopBanner title="위스키 둘러보기" subtitle="다양한 위스키를 만나보세요"/>
      
      {/*인기위스키*/}
      <div className="px-4 py-10 w-[900px] flex flex-row justify-center items-center">
        <BestWhiskeyArr items={items}/>
      </div>

      {/* 상품 목록 */}
      <div className="flex flex-col items-center gap-8 my-8">
        <div className="w-[776px] flex flex-col items-center justify-between">
        
          {/* 검색창 + 카테고리 */}
          <div className="w-[776px] py-2 flex flex-row items-center justify-between">
            <SearchBox></SearchBox>
            <div className="flex flex-row items-center justify-end w-[200px] border border-black">
              <button className="flex w-[20px] h-[20px] justify-center items-center bg-slate-300 rounded-full"
                onClick={()=>setOpen(true)}
                >
              </button>
              <Modal isOpen={open} onClose={()=>setOpen(false)}>
                <h2 className="text-lg font-bold mb-4">카테고리 추가하기</h2>
                <p className="mb-4">블라블라</p>
                <button
                  onClick={() => setOpen(false)}
                  className="bg-gray-200 px-3 py-2 rounded"
                >
                  닫기
                </button>
              </Modal>
            </div>  
          </div>

          {/* 위스키 카드 4*4 */}       
          <div className="grid grid-cols-4 gap-4 mt-5">
            {currentItems.map((item) => (
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
