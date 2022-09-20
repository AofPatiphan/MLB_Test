import React from "react";

function Input({ keyword, setKeyword, onClear }) {
  return (
    <div className="mb-[60px]">
      <input
        value={keyword}
        type="text"
        className="border border-slate-300 mr-[10px] py-[20px] px-[10px]"
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="text-blue-500" type="button" onClick={() => onClear()}>
        CLEAR
      </button>
    </div>
  );
}

export default Input;
