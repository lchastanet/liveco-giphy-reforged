import React from "react";

function Gif({ gif, setSelected }) {
  const handleClick = () => {
    document.body.style.overflow = "hidden";
    setSelected(gif);
  };

  return (
    <div
      className="flex flex-wrap justify-center m-5 hover:cursor-pointer hover:scale-105 transition"
      onClick={handleClick}
    >
      <img
        className="p-1 bg-white border rounded max-w-xs"
        src={gif.images.downsized_large.url}
        alt=""
      />
    </div>
  );
}

export default Gif;
