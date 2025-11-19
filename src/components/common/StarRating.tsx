interface StarRatingProps {
  rating: number; // 0 ~ 5, 0.5 단위
}

export default function StarRating({ rating }: StarRatingProps) {
  // 5개의 별 기준으로 배열 만들기
  const stars = [1, 2, 3, 4, 5].map((star) => {
    if (rating >= star) return "full";        // 완전 채움
    if (rating >= star - 0.5) return "half";  // 반 채움
    return "empty";                           // 비어있음
  });

  return (
    <div className="flex gap-1">
      {stars.map((type, i) => (
        <Star key={i} type={type} />
      ))}
    </div>
  );
}

interface StarProps {
  type: "full" | "half" | "empty";
}

function Star({ type }: StarProps) {
  if (type === "full")
    return <span className="text-gray-500">★</span>;

  if (type === "half")
    return (
      <span className="relative inline-block text-yellow-500">
        <span className="text-gray-300">★</span>
        <span className="text-gray-500 absolute left-0 top-0 w-1/2 overflow-hidden">★</span>
      </span>
    );

  return <span className="text-gray-300">★</span>;
}
