import { useState, useRef } from "react";

interface DetailSliderProps {
  label: string;
  min?: number;
  max?: number;
  initial?: number;
  onChange?: (value: number) => void;
}

export default function DetailSlider({
  label,
  min = 0,
  max = 100,
  initial = 0,
  onChange
}: DetailSliderProps) {
  const [value, setValue] = useState(initial);
  const barRef = useRef<HTMLDivElement>(null);

  const updateValue = (clientX: number) => {
    const bar = barRef.current;
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const newValue = Math.round(min + percent * (max - min));

    setValue(newValue);
    onChange?.(newValue);
    // onChange && onChange(newValue);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    updateValue(e.clientX);

    const handleMouseMove = (e: MouseEvent) => updateValue(e.clientX);
    const stop = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stop);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stop);
  };

  // 퍼센트 계산 (UI용)
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col w-full">
      <span className="text-[11px] mb-2">{label}</span>

      {/* 바 전체 영역 */}
      <div
        ref={barRef}
        className="relative w-full h-[7px] bg-gray-200 rounded-full select-none"
        onMouseDown={handleMouseDown}
      >

        {/* 채워진 부분 */}
        <div
          className="absolute top-0 left-0 h-[7px] bg-gray-500 rounded-full"
          style={{ width: `${percent}%` }}
        />

        {/* 동그라미(thumb) */}
        <div
          className="absolute top-1/2 w-4 h-4 bg-black rounded-full -translate-y-1/2 cursor-pointer"
          style={{ left: `calc(${percent}% - 10px)` }}
        />
      </div>
    </div>
  );
}

