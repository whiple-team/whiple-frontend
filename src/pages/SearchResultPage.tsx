import { TopBanner } from "../components";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { searchWhiskey } from "../api/whiskey";
import {WhiskeyCard } from "../components";
import type { Whiskey } from "../components/Pagenation";
import { useState } from "react";


export default function SearchResultPage (){

    const[params] = useSearchParams();
    const keyword = params.get("keyword")||"";

    const [list, setList] = useState<Whiskey[]>([]);

    useEffect(()=>{
        const fetchSearch = async () => {
            
            const result = await searchWhiskey(keyword);

            setList(result);
        };

        fetchSearch();
    }, [keyword]);
    
    return(
        <div className="flex flex-col w-full items-center gap-10">
            <TopBanner title="검색 결과" subtitle="다양한 위스키를 검색해보세요"/>
            <p>"{keyword}"로 검색한 결과입니다.</p>

            {list.length === 0 && (
                <p className="text-gray-500">검색 결과가 없습니다.</p>
            )}

            <div className="grid grid-cols-2 gap-4">
                {list.map((item) => (
                <WhiskeyCard key={item.id} {...item} />
                ))}
            </div>

            

        </div>
    );
}