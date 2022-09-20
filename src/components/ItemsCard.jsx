import React from "react";

function ItemsCard({ items }) {
  return (
    <div className="col-span-1 bg-slate-300 h-[400px] lg:h-[500px] rounded-lg">
      <img
        src={items.image}
        alt=""
        className="w-full h-[60%] lg:h-[70%] block mb-[30px] rounded-t-lg"
      />
      <div className="">{`${items.first_name} ${items.last_name}`}</div>
      <div className="">{items.gender}</div>
      <div className="">{items.email}</div>
      <div className="">{items.country}</div>
    </div>
  );
}

export default ItemsCard;
