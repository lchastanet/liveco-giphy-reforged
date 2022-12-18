import React from "react";

function SelectedGif({ gif, setSelected }) {
  const handleClose = () => {
    document.body.style.overflow = "auto";
    setSelected(null);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center 
        justify-center bg-black bg-opacity-50 backdrop-blur-md overflow-x-hidden"
      onClick={handleClose}
    >
      <img
        className="rounded max-w-md"
        src={gif.images.downsized_large.url}
        alt=""
      />
    </div>
  );
}

export default SelectedGif;
