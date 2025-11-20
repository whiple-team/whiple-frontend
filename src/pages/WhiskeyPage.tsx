import { DetailCard, WriteReview } from "../components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Whiskey {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  image: string;
  tags: string[];
}

export default function WhiskeyPage() {

    const {id} = useParams();
    const [whiskey, setWhiskey] = useState<Whiskey | null>(null);

    useEffect(() => {
        fetch("/data/whiskey.json")
        .then(res => res.json())
        .then(data => {
            const found = data.find(item => item.id === Number(id));
    setWhiskey(found || null);
        });
    }, [id]);

    if (!whiskey) return <div>로딩 중...</div>;


    return(
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
            <div className="flex flex-col justify-center items-center gap-10">
                <DetailCard
                    id={whiskey.id}
                    name={whiskey.name}
                    rating={whiskey.rating}
                    reviewCount={whiskey.reviewCount}
                    image={whiskey.image}
                    tags={whiskey.tags}
                />

                <WriteReview/>
            </div>
            <div className= "flex gap-2 mt-4">
                <span>테이스팅 노트</span>
                <span>{whiskey.reviewCount}</span>
            </div>
        </div>
    );
}