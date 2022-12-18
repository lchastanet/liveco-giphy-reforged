import React from "react";

import Gif from "./Gif";

function GifList({ gifs, setSelected }) {
  return (
    <div className="flex flex-wrap mt-3 justify-center bg-white">
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif} setSelected={setSelected} />
      ))}
    </div>
  );
}

export default GifList;
