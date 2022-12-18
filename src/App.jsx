import { useState } from "react";

import GifList from "./components/GifList";
import SelectedGif from "./components/SelectedGif";

function App() {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=${
        import.meta.env.VITE_GIPHY_API
      }&q=${query}&limit=5`
    )
      .then((res) => res.json())
      .then((res) => setGifs(res.data));
  };

  return (
    <div className="bg-slate-700 z-0">
      <header className="flex p-5">
        <form className="w-full flex justify-center">
          <input
            type="text"
            name="query"
            id="query"
            className="px-2 py-2 mr-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="submit"
            value="Rechercher"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
          />
        </form>
      </header>

      {gifs.length > 0 && <GifList gifs={gifs} setSelected={setSelected} />}
      {selected && <SelectedGif gif={selected} setSelected={setSelected} />}
    </div>
  );
}

export default App;
