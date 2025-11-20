import { DetailCard, WriteReview, ReviewCard } from "../components";
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

interface Review {
    id: number;
    whiskeyId: number;

    reviewText: string;
    overallRating: number;
    tastingNotes: {
        smoky: number;
        sweetness: number;
        fruity: number;
        spicy: number;
        }
    author: string;
    createdAt: string;
}

export default function WhiskeyPage() {

    const {id} = useParams();
    const whiskeyId = Number(id);

    const [whiskey, setWhiskey] = useState<Whiskey | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    
    //위스키 정보 가져오기
    useEffect(() => {
        fetch("/data/whiskey.json")
        .then(res => res.json())
        .then(data => {
            const found = data.find(item => item.id === Number(id));
    setWhiskey(found || null);
        });
    }, [id]);

    //리뷰 가져오기
    useEffect(()=>{
        fetch("/data/Review.json")
        .then(res => res.json())
        .then((data: Review[]) => setReviews(data));
    },[]);

    //현재 위스키에 달린 리뷰 필터링
    const filteredReviews = reviews.filter(
        (r) => r.whiskeyId === whiskeyId);

    if (!whiskey) return <div>로딩 중...</div>;


    return(
        <div className="flex flex-col justify-center items-center gap-4 mt-10">
            <div className="flex flex-col justify-center items-center gap-10">
                {/* 리뷰 목록 */}
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
            <div className= "flex flex-col justify-center items-center gap-2 mt-4">
                <div className="flex flex-row">    
                    <span>테이스팅 노트</span>
                    <span>{whiskey.reviewCount}</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 mt-8">
                    {filteredReviews.map((review) => (
                        <ReviewCard 
                            key={review.id}
                            id={review.id}
                            whiskeyId={review.whiskeyId}
                            reviewText={review.reviewText}
                            overallRating={review.overallRating}
                            tastingNotes={review.tastingNotes}
                            author={review.author}
                            createdAt={review.createdAt}
                            />
                ))}

                {filteredReviews.length === 0 && (
                    <p className="text-gray-500">아직 리뷰가 없습니다</p>
                )}
                </div>
            </div>
        </div>
    );
}