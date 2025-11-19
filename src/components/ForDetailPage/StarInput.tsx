import { useState } from "react";

export default function StarInput({ onChange }: { onChange?: (v: number) => void }) {
  const [rating, setRating] = useState(0);      // 실제 선택된 별점 (고정)
  const [hover, setHover] = useState(0);        // 마우스 올렸을 때 임시 별점

  return (
    <div className="flex gap-1 cursor-pointer">
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= (hover || rating)}   // hover가 있으면 hover, 없으면 rating
          onMouseEnter={() => setHover(value)}
          onMouseLeave={() => setHover(0)}
          onClick={() => {
            setRating(value);
            onChange && onChange(value);       // 부모에도 값 전달 가능
          }}
        />
      ))}
    </div>
  );
}

function Star({ filled, ...props }: { filled: boolean } & any) {
  return (
    <svg
      {...props}
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill={filled ? "#2C2C2C" : "none"}
      stroke="#2C2C2C"
      strokeWidth="2"
    >
      <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
    </svg>
  );
}
