import { useState, useEffect } from "react";

function FilterButton({
  items,
  onClickFilterItems,
  type,
  selectedValue,
  keyword,
}) {
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    setIsSelect(selectedValue[type] === items);
  }, [selectedValue]);

  return (
    <div
      className={`flex gap-[30px] justify-center flex-wrap cursor-pointer  ${
        isSelect && !keyword && "bg-slate-900 text-white"
      } ${
        keyword
          ? "bg-slate-100 cursor-not-allowed"
          : "bg-slate-300 hover:bg-slate-500"
      }`}
      onClick={() => {
        if (keyword) return;
        onClickFilterItems(items, type);
      }}
    >
      <div className=" w-fill h-[80px] text-[20px] lg:text-[30px] px-[20px] font-light flex justify-center items-center text-center">
        {items}
      </div>
    </div>
  );
}

export default FilterButton;
