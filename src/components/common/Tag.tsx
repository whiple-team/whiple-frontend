interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <div className="h-[26px] border border-gray-300 rounded-[8px] text-[12px] inline-flex items-center justify-center px-2">
      {label}
    </div>
  );
}
